const express = require('express')
const router = express.Router()
const tweetsRouter = require('./twitters.routes')

router('/tweets',tweetsRouter)

module.exports =router