const { ValidateF } = require("../../middleware/validate");
const roleSchema = require("./role");

const rolesListSchema = new ValidateF()
  .param("data", "اطلاعات")
  .requiredArray(roleSchema)
  .param("total")
  .requiredNumber()
  .done();

module.exports = rolesListSchema;
