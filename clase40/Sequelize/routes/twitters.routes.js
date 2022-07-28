const express = require('express')
const { Tweet } = require('../models')
const tweetsRouter = express.Router()

tweetsRouter.get('/',(req,res,next) => {
    Tweet.findAll()
    .then((tweets) => {
        res.send(tweets)
    })
})

module.exports = tweetsRouter