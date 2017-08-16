'use strict';
const routes = require('../routes');
module.exports = function(app){
  app.set('port', 3000);
  app.use(routes);
  return app;
};