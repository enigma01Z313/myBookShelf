const sendSms = (to, text) => {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve("smsSent")
      // reject( new Error('yyyyyyy') )
    }, 500);
  });
}

module.exports = sendSms