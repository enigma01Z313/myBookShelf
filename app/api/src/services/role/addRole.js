const { Role } = require("../../../db/models");

const addRole = async (req, res, next) => {
  const { name, permissions } = req.body;
  const newRole = await Role.create({
    name,
    permissions: JSON.stringify(permissions),
  });

  res.statusCode = 201;
  res.jsonData = newRole;
  next();
};

module.exports = addRole;
