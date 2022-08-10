const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/wineshop');


const Account = new Schema({
  username: {type: String},
  password: String,
  firstname: {type: String, default: null},
  lastname: {type: String, default: null},
  email: String,
  token: String,
},{
  timestamp: true,
});

module.exports = mongoose.model('account', Account);
