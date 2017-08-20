const TasksCtrl = require('../controllers/TasksCtrl');

const taskRoute = '/tasks/';

module.exports = (app) => {
  const Ctrl = TasksCtrl(app);

  app.route(taskRoute)
    .all(Ctrl.cleanTheBody)
    .get(Ctrl.getTasks);

  app.route(`${taskRoute}:id`)
    .all(Ctrl.cleanTheBody)
    .get((req, res) => {
      res.json({
        status: 'OKAY',
      });
    })
    .post(Ctrl.createTask)
    .put(Ctrl.updateTask)
    .delete(Ctrl.deleteTask);
};
