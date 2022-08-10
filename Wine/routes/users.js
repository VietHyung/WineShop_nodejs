const express = require('express');
const router = express.Router();
const verifyToken = require('./../middlewares/verifyToken');

const User = require('./../control/models/account');


router.get('/', verifyToken, (request, response) => {
    User.find({}).exec(function (err, users) {
        response.send(users);
    });
});

module.exports = router;
