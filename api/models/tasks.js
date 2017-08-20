const _ = require('lodash');

module.exports = function setupTasksModel(sequelize, DataType) {
  const Tasks = sequelize.define('Tasks', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    description: {
      type: DataType.TEXT,
    },
    done: {
      type: DataType.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  });

  Tasks.associate = function associate(models) {
    Tasks.belongsTo(models.Users);
  };

  const instanceMethods = {
    getTask() {
      const { title, description } = this;
      return {
        title,
        description,
      };
    },

    setTitle(title = null) {
      if (!title) {
        throw new Error('No title provided!');
      }

      this.title = title;
      return this.getTask();
    },

    setDescription(description = null) {
      if (!description) {
        throw new Error('No description provided!');
      }

      this.description = description;
      return this.getTask();
    },
  };

  _.each(Object.keys(instanceMethods), (key) => {
    Tasks.prototype[key] = instanceMethods[key];
  });

  return Tasks;
};

