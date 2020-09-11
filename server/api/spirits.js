const router = require('express').Router()
const Spirit = require('../db/models/spirit')
const {isAdmin} = require('./permission')

router.get('/', async (req, res, next) => {
  try {
    const spirits = await Spirit.findAll()
    res.json(spirits)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const selectedSpirit = await Spirit.findOne({
      where: {
        id: req.params.id
      }
    })
    res.json(selectedSpirit)
  } catch (error) {
    next(error)
  }
})

router.post('/', isAdmin, async (req, res, next) => {
  try {
    req.body.price = req.body.price * 100
    const SpiritTemplate = req.body
    for (let key in SpiritTemplate) {
      if (SpiritTemplate[key] === 0 || SpiritTemplate[key] === '')
        delete SpiritTemplate[key]
    }
    const newSpirit = await Spirit.create(SpiritTemplate)
    res.json(newSpirit)
  } catch (error) {
    next(error)
  }
})

router.put('/:id', isAdmin, async (req, res, next) => {
  try {
    req.body.price = req.body.price * 100
    const SpiritTemplate = req.body
    for (let key in SpiritTemplate) {
      if (SpiritTemplate[key] === 0 || SpiritTemplate[key] === '')
        delete SpiritTemplate[key]
    }

    const SpiritToEdit = await Spirit.findByPk(req.params.id)
    const changedSpirit = await SpiritToEdit.update(SpiritTemplate)
    res
      .json(changedSpirit)
      .statusMessage('Selected Spirit informaion was edited')
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', isAdmin, async (req, res, next) => {
  try {
    const SpiritToRemove = await Spirit.findByPk(req.params.id)
    await SpiritToRemove.destroy()
    // res.send(req.params.id)
  } catch (error) {
    next(error)
  }
})
module.exports = router
