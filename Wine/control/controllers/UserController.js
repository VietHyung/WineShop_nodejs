

const User = require('../models/account');

class UserController{
  async updateUser (req, res) {
    if(req.body.password) {
      req.body.password = hashPassword;
    }
    try{
      const updatedUser = await User.findByIdAndUpdate(req.params.id,{
        $set: req.body
      },{new:true}).lean();
      res.status(200).json(updatedUser);
    } catch(err) {
      res.status(500).json(err);
    }
  }

  async deleteUser (req, res) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("user deleted");
    }catch(err) {
      res.status(500).json(err);
    }
  }

  async getUser (req, res){
    try {
      const user = await User.findById(req.params.id);
      res.status(200).json(user);
    }catch(err) {
      res.status(500).json(err);
    }
  }

  async getAllUsers (req, res){
    const query = req.query.new
    try {
      const user = query ? await User.find().sort({_id : -1}).limit(2) : await User.find();
      res.status(200).json(user);
    }catch(err) {
      res.status(500).json(err);
    }
  }

  async getStats (req, res){
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

    try {
      const data = await User.aggregate([
        {$match : {createdAt: {$gte: lastYear}}},
        {
          $project:{
            month: {$month: "$createdAt"},
          },
        },
        {
          $group:{
            _id: "$month",
            total: {$sum: 1},
          }
        }
      ])
      res.status(200).json(data)
    }catch(err) {
      res.status(500).json(err);
    }
  }
}

module.exports = new UserController;
