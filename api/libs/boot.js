/* global LOG */
const http = require('http');
const toleranceConfig = require('../config/tolerance');

module.exports = (app) => {
  const server = http.createServer(app);

  app.libs.db.sequelize.sync().done(() => {
    server.listen(app.get('port'), () => {
      LOG(`App started on port ${app.get('port')}`);
    });
  });

  toleranceConfig(server);

  return server;
};
