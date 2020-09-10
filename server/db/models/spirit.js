const Sequelize = require('sequelize')
const db = require('../db')

const Spirit = db.define('spirit', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false
  },
  flavor: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
      isNonNegative(value) {
        if (value < 0) {
          throw new Error('Price is invalid!')
        }
      }
    }
  },
  volume: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  inStock: {
    type: Sequelize.INTEGER,
    defaultValue: 100
  },
  image: {
    type: Sequelize.TEXT,
    defaultValue: 'https://cdn.mos.cms.futurecdn.net/iHHBqNXQN5B66Qf2oKDKjh.jpg'
  }
})

module.exports = Spirit
