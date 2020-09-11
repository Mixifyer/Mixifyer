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

const SodaOrder = db.define('SodaOrder', {
  savedPrice: {
    type: Sequelize.INTEGER
  },
  sodaQuantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
})

const SpiritOrder = db.define('SpiritOrder', {
  savedPrice: {
    type: Sequelize.INTEGER
  },
  sodaQuantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
})

const BitterOrder = db.define('BitterOrder', {
  savedPrice: {
    type: Sequelize.INTEGER
  },
  sodaQuantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
})

Order.belongsToMany(Soda, {through: 'SodaOrder'})
Soda.belongsToMany(Order, {through: 'SodaOrder'})

Order.belongsToMany(Spirit, {through: 'SpiritOrder'})
Spirit.belongsToMany(Order, {through: 'SpiritOrder'})

Order.belongsToMany(Bitter, {through: 'BitterOrder'})
Bitter.belongsToMany(Order, {through: 'BitterOrder'})
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
  SodaOrder,
  SpiritOrder,
  BitterOrder
}
