const router = require('express').Router()
const Bitter = require('../db/models/bitter')
const {isAdmin} = require('./permission')

router.get('/', async (req, res, next) => {
  try {
    const bitters = await Bitter.findAll()
    res.json(bitters)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const selectedBitter = await Bitter.findOne({
      where: {
        id: req.params.id
      }
    })
    res.json(selectedBitter)
  } catch (error) {
    next(error)
  }
})

router.post('/', isAdmin, async (req, res, next) => {
  try {
    req.body.price = req.body.price * 100
    const bitterTemplate = req.body
    for (let key in bitterTemplate) {
      if (bitterTemplate[key] === 0 || bitterTemplate[key] === '')
        delete bitterTemplate[key]
    }
    const newBitter = await Bitter.create(bitterTemplate)
    res.json(newBitter)
  } catch (error) {
    next(error)
  }
})

router.put('/:id', isAdmin, async (req, res, next) => {
  try {
    req.body.price = req.body.price * 100
    const bitterTemplate = req.body
    for (let key in bitterTemplate) {
      if (bitterTemplate[key] === 0 || bitterTemplate[key] === '')
        delete bitterTemplate[key]
    }

    const bitterToEdit = await Bitter.findByPk(req.params.id)
    const changedBitter = await bitterToEdit.update(bitterTemplate)
    res.json(changedBitter).statusMessage('the bitter informaion was edited')
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', isAdmin, async (req, res, next) => {
  try {
    const bitterToRemove = await Bitter.findByPk(req.params.id)
    await bitterToRemove.destroy()
    // res.send(req.params.id)
  } catch (error) {
    next(error)
  }
})
module.exports = router
