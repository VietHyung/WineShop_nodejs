
const Product = require('../models/product.js')

const User = require('../models/account');

class OrderController{
  async createOrder (req, res) {
    const newOrder = new Order(req.body);

    try{
      const savedOrder = await newOrder.save();
      res.status(200).json(savedOrder);
    }catch(err){
      res.status(500).json(err)
    }
  }

  async updateOrder (req, res) {
    try{
      const updatedOrder = await Order.findByIdAndUpdate(req.params.id,{
        $set: req.body
      },{new:true}).lean();
      res.status(200).json(updatedOrder);
    } catch(err) {
      res.status(500).json(err);
    }
  }

  async deleteOrder (req, res) {
    try {
      await Order.findByIdAndDelete(req.params.id);
      res.status(200).json("Order deleted");
    }catch(err) {
      res.status(500).json(err);
    }
  }

  async getUserOrders (req, res) {
    try {
      const orders = await Order.find({userId: req.params.userId});
      res.status(200).json(orders);
    }catch(err) {
      res.status(500).json(err);
    }
  }

  async getAllOrders (req, res) {
    try{
      const orders = await Order.find()
      res.status(200).json(orders);
    }catch(err) {
      res.status(500).json(err);
    }
  }

  async getIncome (req, res) {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

    try {
      const income = await Order.aggregate([
        {$match : {createdAt: {$gte: previousMonth}}},
        {
          $project:{
            month: {$month: "$createdAt"},
            sales: "$amount",
          },
        },
        {
          $group:{
            _id: "$month",
            total: {$sum: "$sales"},
          }
        }
      ])
      res.status(200).json(income);
    }catch(err) {
      res.status(500).json(err);
    }
  }
}

module.exports = new OrderController;
