const router = require('express').Router()
const Soda = require('../db/models/soda')
const {isAdmin} = require('./permission')

router.get('/', async (req, res, next) => {
  try {
    console.log(Soda)
    const sodas = await Soda.findAll()
    res.json(sodas)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const selectedSoda = await Soda.findOne({
      where: {
        id: req.params.id
      }
    })
    res.json(selectedSoda)
  } catch (error) {
    next(error)
  }
})

router.post('/', isAdmin, async (req, res, next) => {
  try {
    req.body.price = req.body.price * 100
    const SodaTemplate = req.body
    for (let key in SodaTemplate) {
      if (SodaTemplate[key] === 0 || SodaTemplate[key] === '')
        delete SodaTemplate[key]
    }
    const newSoda = await Soda.create(SodaTemplate)
    res.json(newSoda)
  } catch (error) {
    next(error)
  }
})

router.put('/:id', isAdmin, async (req, res, next) => {
  try {
    req.body.price = req.body.price * 100
    const SodaTemplate = req.body
    for (let key in SodaTemplate) {
      if (SodaTemplate[key] === 0 || SodaTemplate[key] === '')
        delete SodaTemplate[key]
    }

    const sodaToEdit = await Soda.findByPk(req.params.id)
    const changedSoda = await sodaToEdit.update(SodaTemplate)
    res.json(changedSoda).statusMessage('Selected soda informaion was edited')
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', isAdmin, async (req, res, next) => {
  try {
    const sodaToRemove = await Soda.findByPk(req.params.id)
    await sodaToRemove.destroy()
    // res.send(req.params.id)
  } catch (error) {
    next(error)
  }
})
module.exports = router
