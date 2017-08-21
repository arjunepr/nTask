/* global describe it */
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');

const { expect } = chai;

chai.use(chaiHttp);

describe('Tasks', () => {
  it('Should GET all tasks', (done) => {
    chai.request(app)
      .get('/tasks')
      .end((err, res) => {
        expect(res).to.have.status(200);
        // expect(res.body.tasks).to.be.a('Array');
        // res.body.length.should.be.eql(2);
        done();
      });
  });

  it('Should create a task', (done) => {
    chai.request(app)
      .post('/tasks')
      .type('json')
      .send({
        title: 'Dummy',
        description: 'Dummy Description',
      })
      .then((result) => {
        expect(result).to.be.an('object');
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});
