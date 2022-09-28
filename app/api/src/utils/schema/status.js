const { ValidateF } = require("../../middleware/validate");

const statusSchema = new ValidateF()
  .param("code")
  .requiredNumber()
  .param("label")
  .requiredString()
  .param("color")
  .requiredString()
  .done();

module.exports = statusSchema;
