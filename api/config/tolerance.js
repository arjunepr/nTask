/* global LOG */
const ON_DEATH = require('death')({ uncaughtException: true });

module.exports = function cleanUp(server) {
  return ON_DEATH((signal, err) => {
    if (err) {
      return console.error(err);
    }

    return server.close(() => LOG('Server closing... '));
  });
};
