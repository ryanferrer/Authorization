const express = require('express');

const Router = express.Router();

const { authenticate } = require('../../../database/controllers/User.js');

Router.post('/', (req, res) => {
  console.log(req.body);
  const query = {
    username: req.body.credentials.username,
    password: req.body.credentials.password,
  };

  authenticate(query, (err, data) => {
    if (err) {
      console.log(err);
      res.status(400).send();
    } else {
      res.status(200).send(data);
    }
  });
});

module.exports = Router;