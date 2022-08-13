const express = require('express');
const router = express.Router();

const siteController = require('../control/controllers/SiteController');
const productController = require('../control/controllers/ProductController');
const verifyToken = require('./../middlewares/verifyToken');

router.get('/product-detail',productController.productDetail);
router.get('/product',productController.product);
router.get('/contact',siteController.contact);
router.get('/about',siteController.about);

router.get('/',siteController.index);

module.exports = router;
