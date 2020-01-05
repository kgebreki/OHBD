const mongoose = require('mongoose');
const { createFakeUsers } = require('../faker');

mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const createNewUsers = false;


console.log(process.env.DATABASE_URL);

const database = mongoose.connect(process.env.DATABASE_URL, options)
  .then(() => {
    console.log('Connected to database.');
    if (createNewUsers) {
      createFakeUsers(100);
    }
  })
  .catch(err => console.error('Error connecting to database:', err.message));

module.exports = database;
