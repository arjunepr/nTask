const { NODE_ENV, DB_NAME, USER, PASS, STORAGE } = require('process').env;

module.exports = {
  database: DB_NAME,
  username: USER && '',
  password: PASS && '',
  params: {
    dialect: 'sqlite',
    logging: NODE_ENV === 'DEVELOPMENT' ? console.log : () => null,
    storage: STORAGE,
    define: {
      underscored: true,
    },
  },
};
