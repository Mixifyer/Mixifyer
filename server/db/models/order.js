const Sequelize = require('sequelize')
const db = require('../db')
const Order = db.define('order', {
  totalPrice: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  isActive: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  totalQuantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
})

module.exports = Order
