

const User = require('./../models/account.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { registerValidator } = require('./../../validations/auth');

class AuthController{

  //get /login/
  getLogin(req, res, next){
    res.render('user/login',{layout: 'main2'});
  }

  //get /register/
  getRegister(req, res, next){
    res.render('user/register',{layout: 'main2'});
  }

  async postLogin(req, res) {
      const user = await User.findOne({username: req.body.username});
      if (!user) return res.render('user/login', {
        err: 'Username or Password is not correct',
        layout: 'main2',
      });

      const checkPassword = await bcrypt.compare(req.body.password, user.password);

      if (!checkPassword) return res.render('user/login', {
        err: 'Username or Password is not correct',
        layout: 'main2',
      });

      const token = jwt.sign({id: user._id, isAdmin: user.isAdmin}, process.env.TOKEN_SECRET, { expiresIn: 60 * 60 });
      //req.headers['Authorization'] = 'Bearer ' + token;

      return res.status(200).json({token});

  }

  async postRegister(req, res) {
      const { error } = registerValidator(req.body);

      if (error) return res.status(422).send(error.details[0].message);

      const checkNameExist = await User.findOne({ username: req.body.username });

      if (checkNameExist) return res.render('user/register', {
        err2: 'Username already exists',
        layout: 'main2',
      });

      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(req.body.password, salt);

      const user = new User({
          username: req.body.username,
          email: req.body.email,
          password: hashPassword,
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          phone: req.body.phone,
      });

      try {
          const newUser = await user.save();
          await res.redirect("login");
      } catch (err) {
          res.status(400).send(err);
      }
  }

}

module.exports = new AuthController;
