const router = require('express').Router()
const Order = require('../db/models/order')
const {OrderedProduct, Product} = require('../db/models')
// const Cocktail = require('../db/models')
// const {CocktailOrder} = require('../db/models')

// router.get('/', async (req, res, next) => {
//   try {
//     const order = await Order.findOne({
//       where: {
//         userId: req.user.id,
//         isCheckedout: true,
//       },
//     })
//     const currentOrder = await OrderedProduct.findAll({
//       where: {orderId: order.id},
//       include: Product,
//     })
//     res.json(currentOrder)
//   } catch (error) {
//     next(error)
//   }
// })

router.put('/', async (req, res, next) => {
  try {
    const order = await Order.findOne({
      where: {
        userId: req.user.id,
        isActive: true
      }
    })
    const product = await Product.findOne({
      where: {
        id: req.body.productId
      }
    })
    const orderChange = {
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
      await productOrder.update(orderChange)
    } else {
      await order.addProduct(product, {through: orderChange})
    }

    const currentOrder = await OrderedProduct.findAll({
      where: {orderId: order.id},
      include: product
    })

    res.json(currentOrder)
  } catch (err) {
    console.log('Error in Orders put')
    next(err)
  }
})

router.put('/checkout', async (req, res, next) => {
  try {
    const order = await Order.findOne({
      where: {
        userId: req.user.id,
        isActive: true
      }
    })
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
    await order.update(req.body)
    const newOrder = await Order.create({})
    await req.user.addOrder(newOrder)
    res.json(newOrder)
  } catch (error) {
    next(error)
  }
})
router.delete('/:id', async (req, res, next) => {
  try {
    const order = await Order.findOne({
      where: {
        userId: req.user.id,
        isActive: true
      }
    })

    const deletedProduct = await OrderedProduct.findOne({
      where: {
        orderId: order.id,
        productId: req.params.id
      }
    })
    await deletedProduct.destroy()
    res.send(req.params.id)
    // res.status(204).json('Deleted')
  } catch (error) {
    console.log(error)
    next(error)
  }
})

module.exports = router
