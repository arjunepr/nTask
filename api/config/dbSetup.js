const Sequelize = require('sequelize');

const { database, username, password, params } = require('./dbConfig');

let sqlObj = null;

module.exports = function setupDb() {
  if (!sqlObj) {
    sqlObj = new Sequelize(
      database,
      username,
      password,
      params,
    );
  }

  return sqlObj;
};
