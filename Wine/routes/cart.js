const express = require('express');
const router = express.Router();
const {verifyToken,verifyTokenAuthor, verifyTokenAdmin} = require('./../middlewares/verifyToken');

const Cart = require('./../control/models/cart');
const cartController = require('../control/controllers/CartController');


// router.get('/cart',cartController.cart);

//CREATE
router.post('/', verifyToken, cartController.createCart)

//UPDATE
router.put("/:id", verifyTokenAuthor, cartController.updateCart)

//DELETE
router.delete('/:id', verifyTokenAuthor, cartController.deleteCart)

//GET USER CART
router.get('/find/:userId',verifyTokenAuthor, cartController.getUserCart)

//GET ALL CART
router.get('/', verifyTokenAdmin, cartController.getAllCarts)


module.exports = router;
