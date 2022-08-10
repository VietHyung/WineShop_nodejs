

class SiteController{

  //get /home/
  index(req, res, next){
    res.render('store/home');
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
