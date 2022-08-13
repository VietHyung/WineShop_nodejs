const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/wineshop');


const Account = new Schema({
  username: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true, unique: true},
  firstname: {type: String, default: null, required: true},
  lastname: {type: String, default: null, required: true},
  isAdmin: {type: Boolean, default: false},
  phone: {type: String, default: null, required: true},
},{
  timestamps: true,
});

module.exports = mongoose.model('account', Account);
