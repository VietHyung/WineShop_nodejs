const express = require('express');
const router = express.Router();
const {verifyToken,verifyTokenAuthor, verifyTokenAdmin} = require('./../middlewares/verifyToken');

const Product = require('./../control/models/product');
const productController = require('../control/controllers/ProductController');

// router.get('/product-detail',productController.productDetail);
// router.get('/product',productController.product);


//CREATE
router.post('/', verifyTokenAdmin, productController.createProduct);

//UPDATE
router.put("/:id", verifyTokenAdmin, productController.updateProduct);

//DELETE
router.delete('/:id', verifyTokenAdmin, productController.deleteProduct);

//GET PRODUCT
router.get('/find/:id',verifyTokenAdmin, productController.getProduct);

//GET ALL PRODUCT
router.get('/',verifyTokenAdmin, productController.getAllProducts)

module.exports = router;
