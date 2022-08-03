const express = require('express');
const router = express.Router();

const siteController = require('../control/controllers/SiteController');

router.get('/blog',siteController.blog);
router.get('/blog-detail',siteController.blogDetail);
router.get('/cart',siteController.cart);
router.get('/checkout',siteController.checkout);
router.get('/contact',siteController.contact);
router.get('/product-detail',siteController.productDetail);
router.get('/product',siteController.product);
router.get('/about',siteController.about);
router.get('/',siteController.index);

module.exports = router;
