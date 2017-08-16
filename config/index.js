const mdConfig = require('./middlewareConfig');
const networkConfig = require('./networkConfig');

module.exports = function(app){
  mdConfig(app);

  const server = networkConfig(app);

}
