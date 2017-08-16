'use strict';
const Express = require('express');
const BaseRouter = Express.Router();

BaseRouter.get('/', (req, res) => {
  res.json({ status: 'OK' });
  LOG('You have succeeded.');
});

module.exports = BaseRouter;