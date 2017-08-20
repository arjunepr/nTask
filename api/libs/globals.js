module.exports = () => {
  global.LOG = process.env.NODE_ENV === 'DEVELOPMENT' ? console.log : () => null;
};
