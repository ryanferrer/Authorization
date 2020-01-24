const express = require('express');

const bodyParser = require('body-parser');
const history = require('connect-history-api-fallback');
const cors = require('cors');

const app = express();
const PORT = 3030;

// import route handlers
const signup = require('./routes/api/Signup.js');
const user = require('./routes/api/User.js');
const signin = require('./routes/api/Signin.js');

// routes
app.use('/api/signin', signin);
app.use('/api/signup', signup);
app.use('/api/user', user);

// User history to intecept client requests and forward to React Router history
app.use(history());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('dist'));
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).send();
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});