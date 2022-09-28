require("dotenv").config();

const { User, Role } = require("../../../db/models");
const fError = require("../../utils/fError");

const authentication = async (req, res, next) => {
  const { authorization } = req?.headers;

  if (!authorization)
    return next(fError(401, "Authorization not sent", "خطای اطلاعات ارسالی"));

  const user = await User.findOne({
    where: { accessToken: authorization },
    include: Role,
  });
  if (!user)
    return next(fError(403, "Token not valid", "توکن نا معتبر میباشد"));

  res.authenticatedUser = user;
  next();
};

module.exports = authentication;
