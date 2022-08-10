var express = require('express');
var siteRouter = require('./site');
var accountRouter = require('./account');
var authRouter = require('./auth');
var userRouter = require('./users');

function route(app){
  app.use('/account', accountRouter);
  app.use('/api/auth', authRouter);
  app.use('/api/users', userRouter);

  app.use('/', siteRouter);
}

module.exports = route;
