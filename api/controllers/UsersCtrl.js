const UsersHelperCreator = require('../helpers/users');

module.exports = (app) => {
  const UsersHelper = UsersHelperCreator(app);

  return {
    findUserById(req, res) {
      const { id } = req.params;
      return UsersHelper.findingHelper(id, res);
    },

    deleteUserById(req, res) {
      const { id } = req.params;
      return UsersHelper.deletionHelper(id, res);
    },

    createUser(req, res) {
      const { body } = req;
      return UsersHelper.creationHelper(body, res);
    },
  };
};
