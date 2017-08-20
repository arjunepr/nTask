const { DB_NAME, USER, PASS, STORAGE } = require('process').env;

module.exports = {
  database: DB_NAME,
  username: USER && '',
  password: PASS && '',
  params: {
    dialect: 'sqlite',
    storage: STORAGE,
    define: {
      underscored: true,
    },
  },
};
