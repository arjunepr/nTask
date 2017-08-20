module.exports = {
  findAll(params, callback) {
    return callback([
      { title: 'Buy some shoes' },
      { title: 'Fix notebook' },
    ]);
  },
};
