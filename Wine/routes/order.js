const express = require('express');
const router = express.Router();
const {verifyToken,verifyTokenAuthor, verifyTokenAdmin} = require('./../middlewares/verifyToken');

const Order = require('./../control/models/order');
const orderController = require('../control/controllers/OrderController');

//router.get('/checkout',siteController.checkout);

//CREATE
router.post('/', verifyToken, orderController.createOrder)

//UPDATE
router.put("/:id", verifyTokenAdmin, orderController.updateOrder)

//DELETE
router.delete('/:id', verifyTokenAdmin, orderController.deleteOrder)

//GET USER ORDERS
router.get('/find/:userId',verifyTokenAuthor, orderController.getUserOrders)

//GET ALL ORDER
router.get('/', verifyTokenAdmin, orderController.getAllOrders)

//GET MONTHLY INCOME
router.get('/income', verifyTokenAdmin, orderController.getIncome)


module.exports = router;
