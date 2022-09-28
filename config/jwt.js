const path = require('path');
require('dotenv').config({path: path.resolve('./config/.env')});

module.exports = {
  accessTokenKey: process.env.ACCESS_TOKEN_SECRET,
  refreshTokenKey: process.env.REFRESH_TOKEN_SECRET,
  tokenValidTime: process.env.TOKEN_VALID_TIME
}