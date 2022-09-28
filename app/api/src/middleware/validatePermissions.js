const { Option } = require("../../db/models");
const fError = require("../utils/fError");

const validatePermissions = async (req, res, next) => {
  const { permissions: desiredPermissions } = req.body;
  const validPermissions = [];
  const permissions = await Option.findOne({ where: { key: "permissions" } });
  for (item of JSON.parse(permissions.value))
    for (permission of item.permissions)
      validPermissions.push(permission.permission);

  for (item of desiredPermissions)
    if (!validPermissions.includes(item))
      return next(
        fError(
          400,
          `Permission sent is not valid: '${item}'`,
          `دسترسی ارسال شده قابل قبول نمیباشد: '${item}'`
        )
      );

  return next();
};

module.exports = validatePermissions;
