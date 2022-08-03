

class SiteController{

  //get /home/
  index(req, res, next){
    res.render('home');
  }

  //get /about/
  about(req, res, next){
    res.render('about');
  }

  //get /product/
  product(req, res, next){
    res.render('products');
  }

  //get /detail-product/
  productDetail(req, res, next){
    res.render('product-detail');
  }

  //get /blog/
  blog(req, res, next){
    res.render('blog');
  }

  //get /blog-detail/
  blogDetail(req, res, next){
    res.render('blog-detail');
  }

  //get /cart/
  cart(req, res, next){
    res.render('cart');
  }

  //get /checkout/
  checkout(req, res, next){
    res.render('checkout');
  }

  //get /contact/
  contact(req, res, next){
    res.render('contact');
  }
}

module.exports = new SiteController;
