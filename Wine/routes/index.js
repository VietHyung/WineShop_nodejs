var express = require('express');
var siteRouter = require('./site');
var usersRouter = require('./users');

function route(app){
  app.use('/users', usersRouter);
  app.use('/', siteRouter);
}

module.exports = route;
