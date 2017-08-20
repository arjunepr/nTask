const { TasksCtrl } = require('../controllers');
const Express = require('express');

const TasksRouter = Express.Router();

TasksRouter.get('/', TasksCtrl.getTasks);

module.exports = TasksRouter;
