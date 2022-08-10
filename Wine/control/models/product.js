const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/wineshop');


const Product = new Schema({
  name: {type: String},
  img: String,
  desc: {type: String, default: null},
  price: {type: Number, default: null},
  sale: Boolean,
},{
  timestamp: true,
});

module.exports = mongoose.model('product', Product);
