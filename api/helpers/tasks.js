module.exports = (app) => {
  const { Tasks } = app.libs.db.models;

  return {
    getAllTasks(res) {
      return Tasks.findAll({})
        .then((tasks) => {
          res.json(tasks);
        })
        .catch((err) => {
          res.status(412).json({ msg: err.message });
        });
    },

    createTask(taskBody, res) {
      return Tasks.create(taskBody)
        .then((task) => {
          res.json(task);
        })
        .catch((err) => {
          res.status(412).json({ msg: err.message });
        });
    },

    updateTask(newBody, findParams, res) {
      return Tasks.update(newBody, { where: findParams })
        .then(() => {
          res.sendStatus(204);
        })
         .catch((err) => {
           res.status(412).json({ msg: err.message });
         });
    },

    deleteTask(params, res) {
      return Tasks.destroy({ where: params })
        .then(() => {
          res.sendStatus(204);
        })
        .catch((err) => {
          res.status(412).json({ msg: err.message });
        });
    },
  };
};
