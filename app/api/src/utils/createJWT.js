const jwt = require("jsonwebtoken");

const {
  accessTokenKey,
  refreshTokenKey,
  tokenValidTime,
} = require("../../../../config/jwt");

const generateAccessToken = (tokenObj) => {
  return jwt.sign(tokenObj, accessTokenKey, { expiresIn: tokenValidTime });
};
const generateRefreshToken = (tokenObj) => {
  return jwt.sign(tokenObj, refreshTokenKey);
};

const createJWT = (user) => {
  const { phone, uuid: id } = user;
  const accessToken = generateAccessToken({ id, phone });
  const refreshToken = generateRefreshToken({ id, phone });

  return { accessToken, refreshToken };
};

module.exports = createJWT;
