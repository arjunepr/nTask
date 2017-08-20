const Tasks = require('../models/tasks');

module.exports = {
  getAllTasks(res) {
    return Tasks.findAll({}, (tasks) => {
      res.json(tasks);
    });
  },
};
