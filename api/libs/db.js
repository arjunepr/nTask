const fs = require('fs');
const { join } = require('path');
const _ = require('lodash');
const Sequelize = require('sequelize');

const { database, username, password, params } = require('../config/dbConfig');

let db = null;

module.exports = () => {
  if (!db) {
    const sequelize = new Sequelize(database, username, password, params);

    db = {
      sequelize,
      Sequelize,
      models: {},
    };

    const Modelsdir = join(__dirname, '..', 'models');
    const modelFiles = fs.readdirSync(Modelsdir);


    _.each(modelFiles, (file) => {
      const modelPath = join(Modelsdir, file);
      const model = sequelize.import(modelPath);
      db.models[model.name] = model;
    });

    _.each(Object.keys(db.models), (key) => {
      db.models[key].associate(db.models);
    });
  }
  return db;
};
