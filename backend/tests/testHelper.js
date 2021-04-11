const supertest = require('supertest');
const testController = require('../controllers/testController');
const app = require('../app');

const initTestSetup = (callback) => {
  const server = app.listen(4000, (err) => {
    if (err) callback(err);

    const api = supertest.agent(server);

    testController.resetFunc(() => {
      api
        .post('/auth/login')
        .send({
          email: 'root@root.com',
          password: 'root_pass'
        })
        .end((err, res) => {
          if (err) callback(err);

          const token = 'Bearer ' + res.body.token;

          callback(null, server, api, token);
        });
    });
  });
};

module.exports = {
  initTestSetup
};