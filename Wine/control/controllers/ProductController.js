

class ProductController{

    //get /product/
    product(req, res, next){
      res.render('product/products');
    }

    //get /detail-product/
    productDetail(req, res, next){
      res.render('product/product-detail');
    }
}

module.exports = new ProductController;
