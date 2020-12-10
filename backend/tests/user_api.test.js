const mongoose = require('mongoose');
const supertest = require('supertest');
const helper = require('./test_helper');
const testController = require('../controllers/testController');
const app = require('../app');

let server, api;

beforeAll(async (done) => {
  server = app.listen(4000, (err) => {
    if (err) return done(err);

    api = supertest.agent(server);
    done();
  });
});

beforeEach(async (done) => {
  await testController.resetFunc();
  done();
});

describe('/api/users', () => {
  describe('GET', () => {
    test('Users are returned as json', async () => {
      await api
        .get('/api/users')
        .expect(200)
        .expect('Content-Type', /application\/json/);
    });

    test('User objects contain id field, not _id', async () => {
      const response = await api.get('/api/users');

      for (let user of response.body) {
        expect(user.id).toBeDefined();
        expect(user._id).not.toBeDefined();
      }
    });

    test('All users are returned', async () => {
      const response = await api.get('/api/users');

      expect(response.body).toHaveLength(helper.initialUsers.length);
    });

    test('Specific user is within the returned users', async () => {
      const response = await api.get('/api/users');

      const emails = response.body.map(r => r.email);
      expect(emails).toContain('basic@basic.com');
    });
  });
});

afterAll((done) => {
  mongoose.connection.close();
  done();
});