exports.default = {
  getTasks(req, res, next){
    res.json({
      tasks: [
        {title: 'Become a Full Stack Developer'},
        {title: 'Become a Data Scientist'}
      ]
    })
  }
}