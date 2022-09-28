const path = require('path');
require('dotenv').config({path: path.resolve('./config/.env')});

module.exports = {
  oneTimeLoginTime: process.env.ONE_TIME_LOGIN_TIME
}