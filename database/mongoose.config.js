const mongoose = require('mongoose');

const DB_ADDRESS = 'localhost';
const DB_NAME = 'test';

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