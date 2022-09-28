const path = require('path');
require('dotenv').config({path: path.resolve('./config/.env')});

module.exports = {
  dbUrl: process.env.DATABASE_URL
}