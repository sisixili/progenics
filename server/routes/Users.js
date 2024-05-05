const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt"); // for hashing passwords
const { sign } = require('jsonwebtoken')

// Registration
router.post("/", async (req, res) => {
  const { username, password } = req.body;
  bcrypt.hash(password, 10).then((hash) => { // hash 'severity' of 10
    Users.create({
      username: username,
      password: hash,
    });
    res.json("Registration succesful");
  });
});

// Login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await Users.findOne({ where: { username: username } }); // find user with username

  if (!user) 
    return res.json({ error: "User does not exist" });

  bcrypt.compare(password, user.password).then((match) => {
    // check if inputted password matches pwd associated with username
    if (!match)
      return res.json({ error: "The username or password is incorrect" });

    const accessToken = sign({ username: user.username, id: user.id }, "8waH28nEHUwE") // create token with username and id
    return res.json(accessToken);
  });
});

module.exports = router;
