module.exports = function tasksHelper(app) {
  const { Tasks } = app.get('db').models;
  return {
    getAllTasks(res) {
      return Tasks.findAll({})
        .then((tasks) => {
          res.json({ tasks });
        });
    },
  };
};
