var express = require('express');
var siteRouter = require('./site');
var authRouter = require('./auth');
var userRouter = require('./users');
var productRouter = require('./product');
var cartRouter = require('./cart');
var orderRouter = require('./order');

function route(app){
  app.use('/api/auth', authRouter);
  app.use('/api/users', userRouter);
  app.use('/api/product', productRouter);
  app.use('/api/cart', cartRouter);
  app.use('/api/order', orderRouter);


  app.use('/', siteRouter);
}

module.exports = route;
