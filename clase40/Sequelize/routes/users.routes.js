const express = require('express')
const usersRouter = express.Router()
const { User } = require('../models')

usersRouter.get('/',(req,res) => {
    User.findAll()
    .then((users) => {
        res.send(users)
    })
})

usersRouter.get("/:username", (req, res, next) => {
    const { username } = req.params;
    User.findOne({ where: { username } })
      .then((user) => res.send(user))
      .catch(next);
  });

module.exports = usersRouter