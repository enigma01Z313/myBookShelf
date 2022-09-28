const { Option } = require("../../../db/models");

const listPermissions = async (req, res, next) => {
  const permissions = await Option.findOne({ where: { key: "permissions" } });

  res.jsonData = JSON.parse(permissions.value);
  next();
};

module.exports = listPermissions;
