const path = require("path");
require("dotenv").config({ path: path.resolve("./config/.env") });

module.exports = {
  hashSecret: process.env.HASH_SECRET,
  hashKey: process.env.HASH_KEY,
  hashIV: process.env.HASH_IV,
};
