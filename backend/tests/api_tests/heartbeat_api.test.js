const supertest = require('supertest');
const app = require('../../app');

let server, api;

beforeAll((done) => {
  server = app.listen(4000, (err) => {
    if (err) return done(err);

    api = supertest.agent(server);
    done();
  });
});

describe('/api/heartbeat', () => {
  describe('GET', () => {
    test('Heartbeat is returned', async () => {
      await api
        .get('/api/heartbeat')
        .expect(200);
    }, 60000);
  });
});

afterAll(() => {
  server.close();
});