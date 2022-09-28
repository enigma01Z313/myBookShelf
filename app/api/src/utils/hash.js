const crypto = require("crypto");
const { hashSecret } = require("../../../../config/hachConfig");

const hash = (text) => {
  const hashed = crypto.createHmac("sha256", text).update(text).digest("hex");
  return hashed;
};

module.exports = hash;
