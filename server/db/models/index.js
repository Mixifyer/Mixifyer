const User = require('./user')
const Product = require('./product')
const Cocktail = require('./cocktail')
const Order = require('./order')
const Sequelize = require('sequelize')
const db = require('../db')

User.hasMany(Order)
Order.belongsTo(User)

const OrderedProduct = db.define('ordered_product', {
  savedPrice: {
    type: Sequelize.INTEGER
  },
  productQuantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
})

Order.belongsToMany(Product, {through: 'ProductOrder'})
Product.belongsToMany(Order, {through: 'ProductOrder'})

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Product,
  Cocktail,
  Order,
  OrderedProduct
}
