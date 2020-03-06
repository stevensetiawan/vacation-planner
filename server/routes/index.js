const router = require('express').Router()

const todosRoutes = require('./todosRoutes')
const usersRoutes = require('./userRoutes')
const weatherRoutes = require('./weatherRoutes')
const translatorRoutes = require('./translatorRoutes')
const forismaticRoutes = require('./forismaticRoutes')
const authentication = require('../middlewares/authentication')


router.use('/users', usersRoutes)
router.use('/todos', authentication,todosRoutes)
router.use('/weather', weatherRoutes)
router.use('/translator', translatorRoutes)
router.use('/forismatic', forismaticRoutes)

module.exports = router