
const Product = require('../models/product.js')

class SiteController{

  //get /home/
  index(req, res, next){
    Product.find({}).lean().exec((err, product) =>{
      res.render('store/home',{product: product});
    })
  }

  //get /about/
  about(req, res, next){
    res.render('store/about');
  }

  //get /cart/
  cart(req, res, next){
    res.render('store/cart');
  }

  //get /checkout/
  checkout(req, res, next){
    res.render('store/checkout');
  }

  //get /contact/
  contact(req, res, next){
    res.render('store/contact');
  }
}

module.exports = new SiteController;
