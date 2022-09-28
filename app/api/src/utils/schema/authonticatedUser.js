const { ValidateF } = require("../../middleware/validate");
const statusSchema = require("./status");

const roleInfoScheam = new ValidateF()
  .param("id")
  .requiredString(36)
  .param("name")
  .requiredString()
  .done();

const authonticatedUserSchema = new ValidateF()
  .param("id")
  .requiredString(36)
  .param("phone")
  .requiredString(11)
  .param("nationalCode")
  .requiredString()
  .param("employeeCode")
  .requiredString()
  .param("firstName")
  .requiredString()
  .param("lastName")
  .requiredString()
  .param("imageId")
  .string()
  .param("status", "وضعیت")
  .requiredObject(statusSchema)
  .param("createdAt")
  .required()
  .param("updatedAt")
  .required()
  .param("role")
  .requiredObject(roleInfoScheam)
  .param("permissions")
  .array("string")
  .done();

module.exports = authonticatedUserSchema;
