const User = require('./user')
const Spirit = require('./spirit')
const Soda = require('./soda')
const Bitter = require('./bitter')
const Cocktail = require('./cocktail')
const Order = require('./order')
const Sequelize = require('sequelize')
const db = require('../db')

User.hasMany(Order)
Order.belongsTo(User)

const CocktailOrder = db.define('CocktailOrder', {
  savedPrice: {
    type: Sequelize.INTEGER
  },
  bookQuantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
})

Cocktail.hasMany(CocktailOrder)
CocktailOrder.belongsTo(Cocktail)

Order.belongsToMany(Cocktail, {through: 'CocktailOrder'})
Cocktail.belongsToMany(Order, {through: 'CocktailOrder'})
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
  Spirit,
  Soda,
  Bitter,
  Cocktail,
  Order,
  CocktailOrder
}
