const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/wineshop');


const Order = new Schema({
  userId: {type: String, required: true},
  products: [
    {
      productId: {type: String},
      quantity: {type: String,default: 1},
    }
  ],
  amount: {type: Number, required: true},
  address: {type: Object, required: true},
  status: {type: String, default: "pending"},
},{
  timestamps: true,
});

module.exports = mongoose.model('order', Order);
