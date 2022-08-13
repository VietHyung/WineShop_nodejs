
const Product = require('../models/product.js')

const User = require('../models/account');

class ProductController{

    //get /product/
    product(req, res, next){
        Product.find({}).lean().exec((err, product) =>{
        res.render('product/products',{product: product});
        //res.send(product);
      })
    }

    //get /detail-product/
    productDetail(req, res, next){
      res.render('product/product-detail');
    }

    async createProduct (req, res) {
      const newProduct = new Product(req.body);

      try{
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
      }catch(err){
        res.status(500).json(err)
      }
    }

    async updateProduct (req, res) {
      if(req.body.password) {
        req.body.password = hashPassword;
      }
      try{
        const updatedProduct = await User.findByIdAndUpdate(req.params.id,{
          $set: req.body
        },{new:true}).lean();
        res.status(200).json(updatedProduct);
      } catch(err) {
        res.status(500).json(err);
      }
    }

    async deleteProduct (req, res){
      try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("product deleted");
      }catch(err) {
        res.status(500).json(err);
      }
    }

    async getAllProducts (req, res){
      const qNew = req.query.new;
      const qCategory = req.query.category;
      try {
        let products;

        if(qNew){
          products = await Product.find().sort({createdAt: -1}).limit(1);
        } else if (qCategory){
          products = await Product.find({categories:{
            $in: [qCategory],
          }})
        } else{
          products = await Product.find();
        }

        res.status(200).json(products);
      }catch(err) {
        res.status(500).json(err);
      }
    }

    async getProduct (req, res){
      try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
      }catch(err) {
        res.status(500).json(err);
      }
    }


}

module.exports = new ProductController;
