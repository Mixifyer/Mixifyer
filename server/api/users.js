const router = require('express').Router()
const {User} = require('../db/models')
const {isAdmin} = require('./permission')
module.exports = router

router.get('/', isAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id, {attributes: ['id']})
    // explicitly select only the id and email fields - even though
    // users' passwords are encrypted, it won't help if we just
    // send everything to anyone who asks
    res.json(user)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const removedUser = await User.findByPk(req.params.id, {attributes: ['id']})
    await removedUser.destroy()
    res.status(204).json('Deleted User')
  } catch (error) {
    console.log(error)
    next(error)
  }
})
