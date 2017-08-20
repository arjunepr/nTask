module.exports = function globalConfig(app) {
  global.LOG = process.env.NODE_ENV === 'DEVELOPMENT' ? console.log : () => null;
  global.app = app;
};
