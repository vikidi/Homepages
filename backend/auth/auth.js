const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const UserModel = require('../models/user');

passport.use(
  new JWTstrategy(
    {
      secretOrKey: process.env.SECRET,
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      jsonWebTokenOptions: {
        expiresIn: 60 * 60
      }
    },

    async (jwt_payload, done) => {
      await UserModel.findOne({ id: jwt_payload.sub }, (err, user) => {
        if (err) {
          return done(err, false);
        }

        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      });
    }
  )
);

passport.use(
  'signup',
  new localStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true,
    },

    async (req, email, password, done) => {
      try {
        if (!UserModel.isValidPassword(password)) {
          // TODO: reasoning?
          return done('Invalid password');
        }

        const user = new UserModel({ email, password, name: req.body.name });
        const savedUser = await user.save();

        return done(null, savedUser);
      }
      catch (error) {
        done(error);
      }
    }
  )
);

passport.use(
  'login',
  new localStrategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },

    async (email, password, done) => {
      try {
        const user = await UserModel.findOne({ email });

        if (!user) {
          return done(null, false, { message: 'User not found' });
        }

        const validate = await user.isCorrectPassword(password);

        if (!validate) {
          return done(null, false, { message: 'Wrong Password' });
        }

        return done(null, user, { message: 'Logged in Successfully' });
      }
      catch (error) {
        return done(error);
      }
    }
  )
);