const express = require('express')
const routes = express.Router()
const tweetsRouter = require('./twitters.routes')
const usersRouter = require('./users.routes')

routes.use('/tweets',tweetsRouter)
routes.use('/users',usersRouter)

module.exports = routes