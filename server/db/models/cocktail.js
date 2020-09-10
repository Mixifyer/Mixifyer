const Sequelize = require('sequelize')
const db = require('../db')
const Cocktail = db.define('cocktail', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  purchased: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
})

module.exports = Cocktail
