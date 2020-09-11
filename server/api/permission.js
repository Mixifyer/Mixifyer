const isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next()
  } else {
    const err = new Error('You do not have permission')
    err.status = 401
    return next(err)
  }
}

module.exports = {isAdmin}
