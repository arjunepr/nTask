const { handleSuccess, handleError, noResult } = require('./handlers');

module.exports = (app) => {
  const { Users } = app.libs.db.models;

  return {
    findingHelper(id, res) {
      return Users.findById(id, {
        attributes: ['id', 'name', 'email'],
      })
      .then(handleSuccess(res))
      .catch(handleError(res));
    },

    deletionHelper(id, res) {
      return Users.destroy({ where: { id } })
        .then(noResult(res))
        .catch(handleError(res));
    },

    creationHelper(body, res) {
      return Users.create(body)
        .then(handleSuccess(res))
        .catch(handleError(res));
    },
  };
};
