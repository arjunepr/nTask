const globalConfig = require('./global');
const mdConfig = require('./middlewareConfig');
const networkConfig = require('./networkConfig');
const tolerance = require('./tolerance');

module.exports = function appConfiguration(app) {
  globalConfig(app);
  mdConfig(app);
  const server = networkConfig(app);
  tolerance(server);
  return server;
};

