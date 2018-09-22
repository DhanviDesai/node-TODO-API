const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/TodoApp',{
  useNewUrlParser : true
});
console.log('Connected to the database');

module.exports = {mongoose};
