const router = require('express').Router()
const Order = require('../db/models/order')
const Cocktail = require('../db/models')
const {CocktailOrder} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const order = await Order.findOne({
      where: {
        userId: req.user.id,
        isCheckedout: false
      }
    })
    const currentOrder = await CocktailOrder.findAll({
      where: {orderId: order.id},
      include: Cocktail
    })
    res.json(currentOrder)
  } catch (error) {
    next(error)
  }
})

module.exports = router
