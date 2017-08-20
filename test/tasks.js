/* global describe it */
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');

chai.use(chaiHttp);

describe('Get tasks', () => {
  it('Should GET all tasks', (done) => {
    chai.request(app)
      .get('/tasks')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.tasks.should.be.a('Array');
        // res.body.length.should.be.eql(2);
        done();
      });
  });
});
