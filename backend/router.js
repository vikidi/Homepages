const authRouter = require('./routes/authRouter');
const userRouter = require('./routes/userRouter');
const heartbeatRouter = require('./routes/heartbeatRouter');
const roleRouter = require('./routes/roleRouter');
const permissionRouter = require('./routes/permissionRouter');
const groupRouter = require('./routes/groupRouter');

module.exports = (app) => {
  /* USER */
  app.use('/users/roles', roleRouter);
  app.use('/users/permissions', permissionRouter);
  app.use('/users/groups', groupRouter);
  app.use('/users', userRouter);

  /* AUTHENTICATION */
  app.use('/auth', authRouter);

  /* OTHER */
  app.use('/heartbeat', heartbeatRouter);

  /* TESTING */
  if (process.env.NODE_ENV === 'test') {
    const testRouter = require('./routes/testRouter');
    app.use('/tests', testRouter);
  }
};