const TasksCtrl = require('../controllers/TasksCtrl');

const taskRoute = '/tasks/';

module.exports = (app) => {
  const Ctrl = TasksCtrl(app);

  app.route(taskRoute)
    .get(Ctrl.getTasks)
    .post(Ctrl.createTask);

  app.route(`${taskRoute}:id`)
    .get(Ctrl.findTask)
    .put(Ctrl.updateTask)
    .delete(Ctrl.deleteTask);
};
