const generateRandom = require("../generateRandom");
const hash = require("../hash");
const sendSms = require("../thirdParty/sendSms");

const setOnetimePassword = async (user) => {
  const { phone } = user;
  const oneTimeLogin = generateRandom(true, 6);
  await sendSms(phone, oneTimeLogin);
  await user.update({ oneTimeLogin: hash(oneTimeLogin) });

  return {
    id: user.uuid,
    code: oneTimeLogin,
  };
};

module.exports = setOnetimePassword;
