const updateRole = async (req, res, next) => {
  let uppedData = false;
  const { jsonData: role } = res;
  const { name, permissions, status } = req.body;

  if (name && name !== role.name) role.name = uppedData = name;

  if (permissions && JSON.stringify(permissions) !== role.permissions)
    role.permissions = uppedData = JSON.stringify(permissions);

  if (typeof status !== typeof undefined && status !== parseInt(role.status))
    role.status = uppedData = status;

  if (uppedData === false) {
    res.statusCode = 204;
    return next();
  }

  res.jsonData = await role.save();
  next();
};

module.exports = updateRole;
