const passport = require('passport');
const jwt = require('jsonwebtoken');

module.exports = {
  async signup(req, res) {
    res.json({
      message: 'Signup successful',
      user: req.user
    });
  },

  async login(req, res, next) {
    passport.authenticate(
      'login',
      async (err, user) => {
        try {
          if (err || !user) {
            const error = new Error('An error occurred.');
            return next(error);
          }

          req.login(user, { session: false }, async (error) => {
            if (error) return next(error);

            const body = {
              id: user.id,
              name: user.name,
              role: user.role,
              groups: user.groups,
              passChangeReq: user.passChangeReq,
              admittingReq: user.admittingReq,
              emailConfReq: user.emailConfReq
            };

            const token = jwt.sign({ user: body }, process.env.SECRET, { expiresIn: 60 * 60 });

            return res.json({ ...body, token: `Bearer ${token}` });
          }
          );
        }
        catch (error) {
          return next(error);
        }
      }
    )(req, res, next);
  },

  test(req, res) {
    res.send('Hello secret world!');
  }
};