var mongoose = require('mongoose');
var passport = require('passport-local-mongoose');

var userSchema = new mongoose.Schema({
  username: String,
  password: String,
  useremail: String
});

userSchema.plugin(passport);

module.exports = mongoose.model('User', userSchema);
