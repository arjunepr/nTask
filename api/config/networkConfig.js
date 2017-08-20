/* global LOG */

const http = require('http');

module.exports = function networkConfig(app) {
  const server = http.createServer(app);

  server.listen(app.get('port'), () => {
    LOG(`App started on port ${app.get('port')}`);
  });

  return server;
};