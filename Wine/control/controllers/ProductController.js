
const Product = require('../models/product.js')

const User = require('../models/account');

class ProductController{

    //get /product/
    product(req, res, next){
        Product.find({}).lean().exec((err, product) =>{
        res.render('product/products',{product: product});
        //res.send(product);
      })

      // res.send(product);
      // Product.find({}).exec(function (err, product) {
      //     res.send(product);
      // });
    }



    //get /detail-product/
    productDetail(req, res, next){
      res.render('product/product-detail');
    }
}

module.exports = new ProductController;
