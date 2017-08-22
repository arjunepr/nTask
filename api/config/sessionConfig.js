const JwtSecret = process.env.JWT_SECRET;
const JwtSession = { session: false };

module.exports = {
  JwtSecret,
  JwtSession,
};
