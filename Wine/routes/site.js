const express = require('express');
const router = express.Router();

const siteController = require('../control/controllers/SiteController');
const productController = require('../control/controllers/ProductController');
const blogController = require('../control/controllers/BlogController');
const verifyToken = require('./../middlewares/verifyToken');

const userController = require('../control/controllers/UserController');

router.get('/blog',blogController.blog);
router.get('/blog-detail',blogController.blogDetail);

router.get('/product-detail',productController.productDetail);
router.get('/product',productController.product);

router.get('/cart',siteController.cart);
router.get('/checkout',siteController.checkout);
router.get('/contact',siteController.contact);
router.get('/about',siteController.about);

router.get('/',siteController.index);

module.exports = router;
