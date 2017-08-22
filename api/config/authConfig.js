const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');
const { JwtSecret, JwtSession } = require('./sessionConfig');

module.exports = (app) => {
  const { Users } = app.libs.db.models;
  const params = {
    secretOrKey: JwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeader()
  };
  const strategy = new Strategy(params, (payload, done) => {
    Users.findById(payload.id)
      .then((user) => {
        if (user) {
          return done(null, {
            id: user.id,
            email: user.email,
          });
        }

        return done(null, false);
      })
      .catch(err => done(err, null));
  });
  passport.use(strategy);

  return {
    initiailize() {
      return passport.initialize();
    },
    authenticate() {
      return passport.authenticate('jwt', JwtSession);
    },
  };
};
