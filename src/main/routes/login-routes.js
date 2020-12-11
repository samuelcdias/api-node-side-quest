const loginRouter = require('../composers/loginRouter')

module.exports = router => {
  router.post('/login', loginRouter)
}
