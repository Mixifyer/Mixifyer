const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false
  },
  type: {
    type: Sequelize.STRING
  },
  flavor: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: false
    }
  },
  price: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    allowNull: false,
    validate: {
      notEmpty: true,
      isNonNegative(value) {
        if (value < 1) {
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
    defaultValue: 0
  },
  image: {
    type: Sequelize.TEXT,
    defaultValue:
      'https://imbibemagazine.com/wp-content/uploads/2015/03/cranberry-bitters-crdt-stu-mullenberg.jpg'
  }
})

module.exports = Product
