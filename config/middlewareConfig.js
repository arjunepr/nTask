'use strict';
const routers = require('../routers');
module.exports = function(app){
  app.set('port', 3000);
  app.use(routers);
  return app;
};