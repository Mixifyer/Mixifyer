const Sequelize = require('sequelize')
const db = require('../db')

const Soda = db.define('soda', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  type: {
    type: Sequelize.STRING,
    allowNull: true
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
    defaultValue:
      'https://img1.mashed.com/img/gallery/the-real-reason-there-might-be-a-beer-and-soda-shortage/intro-1587404638.jpg'
  }
})

module.exports = Soda
