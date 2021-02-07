const express = require('express');
const path = require('path');

const authRouter = require('./routes/authRouter');
const contentRouter = require('./routes/contentRouter');
const userRouter = require('./routes/userRouter');
const heartbeatRouter = require('./routes/heartbeatRouter');

module.exports = (app) => {
  app.use('/api', authRouter);
  app.use('/api/heartbeat', heartbeatRouter);
  app.use('/api/contents', contentRouter);
  app.use('/api/users', userRouter);

  if (process.env.NODE_ENV === 'test') {
    const testRouter = require('./routes/testRouter');
    app.use('/api/tests', testRouter);
  }

  if (process.env.NODE_ENV === 'production') {
    app.use('/static', express.static(path.join(__dirname, 'build/static')));
    app.use('/img', express.static(path.join(__dirname, 'build/img')));
    app.use('/locales', express.static(path.join(__dirname, 'build/locales')));
    app.use(express.static(path.join(__dirname, 'build')));
    app.get('*', function(req, res) {
      res.sendFile('index.html', { root: path.join(__dirname, 'build') });
    });
  }
};