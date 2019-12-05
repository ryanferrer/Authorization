const express = require('express');

const bodyParser = require('body-parser');

const app = express();
const PORT = 3030;

// import route handlers
const user = require('./routes/api/User.js');
const login = require('./routes/api/Login.js');

// express middleware
app.use(express.static('dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
app.use('/api/user', user);
app.use('/api/login', login);

app.get('/', (req, res) => {
  res.status(200).send();
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});