const authRouter = require('./routes/authRouter');
const contentRouter = require('./routes/contentRouter');
const userRouter = require('./routes/userRouter');

module.exports = (app) => {
  app.use('/api', authRouter);
  app.use('/api/contents', contentRouter);
  app.use('/api/users', userRouter);

  if (process.env.NODE_ENV === 'test') {
    const testRouter = require('./routes/testRouter');
    app.use('/api/tests', testRouter);
  }
};