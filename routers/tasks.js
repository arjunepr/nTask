const { TasksCtrl } = require('../controllers');
const Express = require('express');

const TasksRouter = Express.Router();

TasksRouter.get('/', TaslCtrl.getTasks);

module.exports = TasksRouter;