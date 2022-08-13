const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/wineshop');


const Product = new Schema({
  name: {type: String, required: true, unique: true},
  img: {type: String, required: true},
  desc: {type: String, default: null},
  categories: {type: Array},
  price: {type: Number, required: true},
  sale: {type: Boolean, required: true},
},{
  timestamps: true,
});

module.exports = mongoose.model('product', Product);
