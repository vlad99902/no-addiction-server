const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const services = require('../services');

const jwt = require('jsonwebtoken');

const opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(opts, async (payload, done) => {
      try {
        const user = await services.getUserById(payload.userId);

        if (user) {
          done(null, user);
        } else {
          done(null, false);
        }
      } catch (error) {
        throw new Error('Error with auth', error);
      }
    }),
  );
};
