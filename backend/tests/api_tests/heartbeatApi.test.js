const helper = require('../testHelper');

let server, api;

beforeAll((done) => {
  helper.initTestSetup((err, s, a) => {
    if (err) done(err);

    server = s;
    api = a;

    done();
  });
});

describe('/heartbeat', () => {
  describe('GET', () => {
    test('Heartbeat is returned', async () => {
      await api
        .get('/heartbeat')
        .expect(200);
    }, 60000);
  });
});

afterAll(() => {
  server.close();
});