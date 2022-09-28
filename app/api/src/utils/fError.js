const fError = (status, enError, faError) => {
  const error = new Error(enError);
  error.text = faError;
  error.status = status;
  return error;
};

module.exports = fError;
