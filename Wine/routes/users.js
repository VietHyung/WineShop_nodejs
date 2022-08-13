const express = require('express');
const router = express.Router();
const {verifyToken,verifyTokenAuthor, verifyTokenAdmin} = require('./../middlewares/verifyToken');

const User = require('./../control/models/account');
const userController = require('../control/controllers/UserController');


//UPDATE
router.put("/:id", verifyTokenAuthor, userController.updateUser)

//DELETE
router.delete('/:id', verifyTokenAdmin, userController.deleteUser)

//GET USER
router.get('/find/:id',verifyTokenAdmin, userController.getUser)

//GET ALL USER
router.get('/',verifyTokenAdmin, userController.getAllUsers)

//GET USER STATS
router.get('/stats',verifyTokenAdmin, userController.getStats)



module.exports = router;
