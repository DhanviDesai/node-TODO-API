const mongoose = require('mongoose');

var User = mongoose.model('Users',{
  email : {
    type: String,
    required : true,
    trim : true,
    min : 1
  },
  password : {
    type : String,
    required : true,
    min : 6
  }
});

module.exports = {User};
