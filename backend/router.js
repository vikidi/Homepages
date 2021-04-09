const authRouter = require('./routes/authRouter');
const contentRouter = require('./routes/contentRouter');
const userRouter = require('./routes/userRouter');
const heartbeatRouter = require('./routes/heartbeatRouter');

module.exports = (app) => {
  app.use(authRouter);
  app.use('/heartbeat', heartbeatRouter);
  app.use('/contents', contentRouter);
  app.use('/users', userRouter);

  if (process.env.NODE_ENV === 'test') {
    const testRouter = require('./routes/testRouter');
    app.use('/tests', testRouter);
  }
};