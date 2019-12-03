const express = require('express');

const router = express.Router();

// import controller methods here from database

router.get('/', (req, res) => {
  res.send('I am the API for getting USERS!');
});

module.exports = router;