const TasksHelper = require('../helpers/tasks');

module.exports = {
  getTasks(req, res) {
    return TasksHelper.getAllTasks(res);
  },
};
