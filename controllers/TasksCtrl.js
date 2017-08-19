module.exports = {
  getTasks(req, res) {
    res.json({
      tasks: [
        { title: 'Become a Full Stack Developer' },
        { title: 'Become a Data Scientist' },
      ],
    });
  },
};
