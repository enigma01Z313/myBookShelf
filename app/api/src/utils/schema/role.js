const { ValidateF } = require("../../middleware/validate");
const statusSchema = require("./status");

const roleSchema = new ValidateF()
  .param("status", "وضعیت")
  .required()
  .object(statusSchema)
  .param("id")
  .requiredString()
  .length(36)
  .param("name")
  .requiredString()
  .param("permissions")
  .requiredArray("string")
  .param("updatedAt")
  .requiredString()
  .param("createdAt")
  .requiredString()
  .done();

module.exports = roleSchema;
