const express = require("express");
const tweetsRouter = express.Router();
const { Tweet, User } = require("../models");

//traer todos
tweetsRouter.get("/", (req, res) => {
  Tweet.findAll().then((tweets) => {
    res.send(tweets);
  });
});

//crear un nuevo documento en la base de datos
// tweetsRouter.post("/", function (req, res) {
//   Tweet.create({
//     message: req.body.message,
//   }).then((tweet) => res.send(tweet));
// });

// encontrar por le id (PK primary key)
tweetsRouter.get("/:id", (req, res, next) => {
  const { id } = req.params;
  Tweet.findByPk(id)
    .then((tweet) => res.send(tweet))
    .catch(next);
});

tweetsRouter.post("/", (req, res) => {
    const { username } = req.body;
    User.findOrCreate({ where: { username } }).then((data) => {
      const user = data[0];
      Tweet.create(req.body)
        .then((newTweet) => {
          newTweet.setUser(user);
          res.status(201).send(newTweet);
        })
        .catch((err) => {
          res.sendStatus(500);
          console.log("ERR", err);
        });
    });
  });
module.exports = tweetsRouter;
