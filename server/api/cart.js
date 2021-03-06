const router = require('express').Router()

const {OrderedProduct, Product, Order} = require('../db/models')
// const Product = require('../db/models/product')
// const Cocktail = require('../db/models')
// const {CocktailOrder} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    let order
    if (req.user) {
      order = await Order.findOne({
        where: {
          userId: req.user.id,
          isActive: true
        }
      })
    } else {
      order = await Order.findOne({
        where: {
          id: req.session.activeOrder.id,
          isActive: true
        }
      })
    }

    const currentOrder = await OrderedProduct.findAll({
      where: {orderId: order.id},
      order: [['productName', 'ASC']],
      include: [Product]
    })
    let totalQuantity = 0
    let totalPrice = 0

    currentOrder.map(eachProduct => {
      totalQuantity += eachProduct.productQuantity
      totalPrice += eachProduct.savedPrice * eachProduct.productQuantity
      return eachProduct
    })

    res.json({currentOrder: currentOrder, totalQuantity, totalPrice})
  } catch (error) {
    next(error)
  }
})

router.put('/', async (req, res, next) => {
  try {
    let order
    if (req.user) {
      order = await Order.findOne({
        where: {
          userId: req.user.id,
          isActive: true
        }
      })
    } else {
      order = await Order.findOne({
        where: {
          id: req.session.activeOrder.id,
          isActive: true
        }
      })
    }

    const product = await Product.findOne({
      where: {
        id: req.body.id
      }
    })
    const orderChange = {
      productName: product.name,
      savedPrice: product.price,
      productQuantity: req.body.quantity
    }

    if (await order.hasProduct(product)) {
      const productOrder = await OrderedProduct.findOne({
        where: {
          orderId: order.id,
          productId: product.id
        }
      })
      orderChange.productQuantity =
        productOrder.productQuantity + req.body.quantity
      await productOrder.update(orderChange)
    } else {
      await order.addProduct(product, {through: orderChange})
    }

    const currentOrder = await OrderedProduct.findAll({
      where: {orderId: order.id},
      order: [['productName', 'ASC']],
      include: [Product]
    })
    let totalQuantity = 0
    let totalPrice = 0

    currentOrder.map(eachProduct => {
      totalQuantity += eachProduct.productQuantity
      totalPrice += eachProduct.savedPrice * eachProduct.productQuantity
      return eachProduct
    })

    order.update({totalQuantity, totalPrice})
    res.json({currentOrder, totalQuantity, totalPrice})
  } catch (err) {
    console.log('Error in Orders put')
    next(err)
  }
})

router.put('/checkout', async (req, res, next) => {
  try {
    let order
    if (req.user) {
      order = await Order.findOne({
        where: {
          userId: req.user.id,
          isActive: true
        }
      })
    } else {
      order = await Order.findOne({
        where: {
          id: req.session.activeOrder.id,
          isActive: true
        }
      })
    }
    const currentOrder = await OrderedProduct.findAll({
      where: {orderId: order.id},
      include: Product
    })
    currentOrder.forEach(async orderedProduct => {
      let result =
        orderedProduct.product.inStock - orderedProduct.productQuantity
      await orderedProduct.product.update({
        inStock: result
      })
    })
    await order.update({isActive: false})

    if (req.user) {
      const newOrder = await Order.create({})
      await req.user.addOrder(newOrder)
    }
    res.json({currentOrder: [], totalQuantity: 0, totalPrice: 0})
  } catch (error) {
    next(error)
  }
})
router.delete('/:id', async (req, res, next) => {
  try {
    let order
    if (req.user) {
      order = await Order.findOne({
        where: {
          userId: req.user.id,
          isActive: true
        }
      })
    } else {
      order = await Order.findOne({
        where: {
          id: req.session.activeOrder.id,
          isActive: true
        }
      })
    }

    const deletedProduct = await OrderedProduct.findOne({
      where: {
        orderId: order.id,
        productId: req.params.id
      }
    })
    await deletedProduct.destroy()
    res.send(req.params.id)
  } catch (error) {
    console.log(error)
    next(error)
  }
})

module.exports = router
