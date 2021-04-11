const mongoose = require('mongoose');
const helper = require('../testHelper');
const userHelper = require('../userHelper');

let server, api, token;

beforeAll((done) => {
  helper.initTestSetup((err, s, a, t) => {
    if (err) done(err);

    server = s;
    api = a;
    token = t;

    done();
  });
});

describe('/users', () => {
  describe('GET', () => {
    test('Users are returned as json', async () => {
      await api
        .get('/users')
        .set('Authorization', token)
        .expect(200)
        .expect('Content-Type', /application\/json/);
    }, 60000);

    test('User objects contain id field, not _id', async () => {
      const response = await api
        .get('/users')
        .set('Authorization', token);

      for (let user of response.body) {
        expect(user.id).toBeDefined();
        expect(user._id).not.toBeDefined();
      }
    });

    test('All users are returned', async () => {
      const response = await api
        .get('/users')
        .set('Authorization', token);

      expect(response.body).toHaveLength(userHelper.initialUsers.length);
    });

    test('Specific user is within the returned users', async () => {
      const response = await api
        .get('/users')
        .set('Authorization', token);

      const emails = response.body.map(r => r.email);
      expect(emails).toContain('basic@basic.com');
    });
  });
});

afterAll((done) => {
  mongoose.connection.close(() => {
    server.close();
    done();
  });
});