/* global app */

const TasksHelper = require('../helpers/tasks');

module.exports = {
  getTasks(req, res) {
    return TasksHelper(app).getAllTasks(res);
  },
};
