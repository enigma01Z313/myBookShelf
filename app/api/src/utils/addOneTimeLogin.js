const crypto = require('crypto');


const generateRandom = require('../utils/generateRandom');
const sendSms = require('../utils/sendSms');

const addOneTimeLogin = async (user) => {
  const onetimeLogin = generateRandom(true, 4);
  const password = crypto.createHash('sha256').update(JSON.stringify(onetimeLogin)).digest('hex');
  const passwordExpires = new Date().getTime() + (2 * 60 * 1000);

  try{
    await sendSms(user.phone, `رمز یکبار مصرف: ${onetimeLogin}`);
    await user.update({
      password,
      passwordExpires
    });

    return onetimeLogin;
    // return true;
  }catch(err) {
    return err;
  }
}

module.exports = addOneTimeLogin;