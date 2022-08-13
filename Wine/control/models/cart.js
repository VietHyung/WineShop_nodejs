const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/wineshop');


const Cart = new Schema({
  userId: {type: String, required: true},
  products: [
    {
      productId: {type: String},
      quantity: {type: String,default: 1},
    }
  ],
},{
  timestamp: true,
});

module.exports = mongoose.model('cart', Cart);
