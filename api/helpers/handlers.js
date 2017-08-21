module.exports = {
  handleSuccess(res) {
    return (result) => {
      res.json(result);
    };
  },
  handleError(res) {
    return (err) => {
      res.status(412).send({ msg: err.message });
    };
  },
  noResult(res) {
    return () => {
      res.sendStatus(204);
    };
  },
};
