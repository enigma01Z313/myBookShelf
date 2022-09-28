const path = require("path");
require("dotenv").config({ path: path.resolve("./config/.env") });

module.exports = {
  dbHost: process.env.MYSQL_HOST,
  dbName: process.env.MYSQL_NAME,
  dbUser: process.env.MYSQL_USER,
  dbPass: process.env.MYSQL_PASS,
  dbNameTest: process.env.MYSQL_NAME_TEST,
};
