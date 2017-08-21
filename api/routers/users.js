const UsersCtrl = require('../controllers/UsersCtrl');

const usersRoute = '/users/';

module.exports = (app) => {
  const Ctrl = UsersCtrl(app);

  app.route(`${usersRoute}:id`)
    .get(Ctrl.findUserById)
    .delete(Ctrl.deleteUserById);

  app.route(usersRoute)
    .post(Ctrl.createUser);
};
