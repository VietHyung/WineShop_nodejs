const express = require('express');
const router = express.Router();

const authController = require('../control/controllers/AuthController');

router.get('/login', authController.getLogin);

router.get('/register', authController.getRegister);

router.post('/login', authController.postLogin);

router.post('/register', authController.postRegister);

module.exports = router;
