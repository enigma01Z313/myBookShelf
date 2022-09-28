const hash = require("../../utils/hash");
const fError = require("../../utils/fError");
const createJWT = require("../../utils/createJWT");
const { oneTimeLoginTime } = require("../../../../../config/oneTimeLoginTime");

const oneTimeConfirm = async (req, res, next) => {
  const { user } = res;
  const { confirmCode } = req.body;
  const { accessToken, refreshToken } = createJWT(user);
  const curTime = new Date().getTime();

  if (
    hash(confirmCode) !== user.oneTimeLogin ||
    curTime - user.updatedAt.getTime() >= oneTimeLoginTime * 1000
  )
    return next(
      fError(
        401,
        "Authentication Error",
        "رمز یک بار مصرف نامعتبر/اشتباه میباشد"
      )
    );

  await user.update({ accessToken, refreshToken, oneTimeLogin: null });
  res.jsonData = { accessToken, refreshToken, user };
  next();
};

module.exports = oneTimeConfirm;
