const router = require('express').Router()
const Product = require('../db/models/product')
const {isAdmin} = require('./permission')

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll()
    res.json(products)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const selectedProduct = await Product.findOne({
      where: {
        id: req.params.id
      }
    })
    res.json(selectedProduct)
  } catch (error) {
    next(error)
  }
})

router.post('/', isAdmin, async (req, res, next) => {
  try {
    req.body.price = req.body.price * 100
    const productTemplate = req.body
    for (let key in productTemplate) {
      if (productTemplate[key] === 0 || productTemplate[key] === '')
        delete productTemplate[key]
    }
    const newProduct = await Product.create(productTemplate)
    res.json(newProduct)
  } catch (error) {
    next(error)
  }
})

router.put('/:id', isAdmin, async (req, res, next) => {
  try {
    req.body.price = req.body.price * 100
    const productTemplate = req.body
    for (let key in productTemplate) {
      if (productTemplate[key] === 0 || productTemplate[key] === '')
        delete productTemplate[key]
    }

    const productToEdit = await Product.findByPk(req.params.id)
    const changedProduct = await productToEdit.update(productTemplate)
    res.json(changedProduct).statusMessage('the product informaion was edited')
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', isAdmin, async (req, res, next) => {
  try {
    const productToRemove = await Product.findByPk(req.params.id)
    await productToRemove.destroy()
    res.send(req.params.id)
  } catch (error) {
    next(error)
  }
})
module.exports = router
// ``
