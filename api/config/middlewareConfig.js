const routers = require('../routers');
const dbSetup = require('./dbSetup');


module.exports = function setMiddlewares(app) {
  app.set('port', 3000);
  app.set('json spaces', 4);
  app.set('db', dbSetup());
  app.use(routers);
  return app;
};
