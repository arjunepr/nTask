const bodyParser = require('body-parser');
const authConfig = require('./authConfig');

module.exports = (app) => {
  app.set('port', 3000);
  app.set('json spaces', 4);

  app.set('auth', authConfig(app));
  app.use(app.get('auth').initialize());
  app.use(bodyParser.json());
  app.use((req, res, next) => {
    delete req.body.id;
    next();
  });
};
