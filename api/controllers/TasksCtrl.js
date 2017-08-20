const TasksHelperCreator = require('../helpers/tasks');

module.exports = (app) => {
  const TasksHelper = TasksHelperCreator(app);

  return {
    getTasks(req, res) {
      return TasksHelper.getAllTasks(res);
    },

    cleanTheBody(req, res, next) {
      if (req.body) {
        delete req.body.id;
      }
      next();
    },

    createTask(req, res) {
      const { body } = req;
      return TasksHelper(app).createTask(body, res);
    },

    findTask(req, res) {
      return TasksHelper(app).findTask(req, res);
    },

    updateTask(req, res) {
      const { body, params } = req;
      return TasksHelper(app).updateTask(body, params, res);
    },

    deleteTask(req, res) {
      const { params } = req;
      return TasksHelper(app).deleteTask(params, res);
    },
  };
};
