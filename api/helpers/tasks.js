const { handleSuccess, handleError, noResult } = require('./handlers');

module.exports = (app) => {
  const { Tasks } = app.libs.db.models;

  return {
    getAllTasks(res) {
      return Tasks.findAll({})
        .then(handleSuccess(res))
        .catch(handleError(res));
    },

    findTask(id, res) {
      Tasks.findById(id, {
        attributes: ['id', 'description', 'done'],
      })
      .then(handleSuccess(res))
      .catch(handleError(res));
    },

    createTask(taskBody, res) {
      return Tasks.create(taskBody)
        .then(handleSuccess(res))
        .catch(handleError(res));
    },

    updateTask(newBody, findParams, res) {
      return Tasks.update(newBody, { where: findParams })
        .then(noResult(res))
         .catch(handleError(res));
    },

    deleteTask(params, res) {
      return Tasks.destroy({ where: params })
        .then(noResult(res))
        .catch(handleError(res));
    },
  };
};
