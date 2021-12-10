const heartbeatRouter = require('./routes/heartbeatRouter');

module.exports = (app) => {
  /* OTHER */
  app.use('/heartbeat', heartbeatRouter);
};