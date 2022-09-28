const { User, Role } = require("../../../db/models");
const fError = require("../../utils/fError");

const userById = async (req, res, next) => {
  const { userId: uuid } = req.params;
  const user = await User.findOne({ where: { uuid }, include: Role });

  if (!user) return next(fError(404, "Not Found", "کاربر مورد نظر وجود ندارد"));

  res.user = user;
  next();
};

module.exports = userById;
