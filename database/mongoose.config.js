const mongoose = require('mongoose');

// These are development variables and don't need to be srored in a .env file until production
const DB_ADDRESS = 'localhost';
const DB_NAME = 'rrdev';

mongoose.connect(`mongodb://${DB_ADDRESS}/${DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
  console.log('REMOTEREQ DATABASE CONENCTION SUCCESSFUL!');
});

module.exports = mongoose;