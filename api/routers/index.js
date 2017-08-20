const Express = require('express');

const BaseRouter = Express.Router();

// Routers
const tasksRoute = require('./tasks');


BaseRouter.get('/', (req, res) => {
  res.json({ status: 'OK' });
});

BaseRouter.use('/tasks', tasksRoute);

module.exports = BaseRouter;
