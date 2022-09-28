const express = require("express");
const { Op } = require("sequelize");
const router = express.Router();
const use = require("../src/utils/use");
const serveJson = require("../src/middleware/serveJson");
const authentication = require("../src/middleware/auth/authentication");
const authorization = require("../src/middleware/auth/authorization");
const { ValidateF, validator } = require("../src/middleware/validate");
const isUnique = require("../src/middleware/isUnique");
const getDataByUUID = require("../src/middleware/getDataByUUID");
const validatePermissions = require("../src/middleware/validatePermissions");
const filteredData = require("../src/middleware/filteredData");

const testD = {
  status: {
    code: 1,
    label: "فعال",
    color: "greed",
  },
  id: "71485d73-5ccf-4b40-a19b-2a4fc7daec55",
  name: "role 13",
  permissions: ["SEE_ROLES", "ADD_ROLES"],
  updatedAt: "2022-04-01T09:40:59.225Z",
  createdAt: "2022-04-01T09:40:59.225Z",
};
const testD2 = {
  data: [
    {
      id: "9ad28da3-da30-4853-99b1-88d9e8ff3b6d",
      name: "role 11",
      permissions: ["SEE_ROLES", "ADD_ROLES"],
      status: {
        code: 0,
        label: "غیر فعال",
        color: "red",
      },
      createdAt: "2022-03-26T08:56:29.000Z",
      updatedAt: "2022-03-26T11:25:46.000Z",
    },
    // {
    //   id: "94488559-dd9b-4406-9e4f-ab1347c6f09f",
    //   name: "role 2",
    //   permissions: ["SEE_ROLES", "ADD_ROLES"],
    //   status: {
    //     code: 0,
    //     label: "غیر فعال",
    //     color: "red",
    //   },
    //   createdAt: "2022-03-26T09:11:21.000Z",
    //   updatedAt: "2022-03-28T15:25:55.000Z",
    // },
  ],
  total: 3,
};
const validation = require("../src/middleware/validate/validatorFunction");
const { roleSchema, rolesListSchema } = require("../src/utils/schema");

const {
  listPermissions,
  addRole,
  getRoles,
  updateRole,
} = require("../src/services/role");

/**************************/
/*   validation schemas   */
/**************************/
const newRoleSchema = new ValidateF()
  .param("name", "نام نقش کاربری")
  .required()
  .param("permissions", "لیست نقش کاربری")
  .required()
  .array("string")
  .done();

const updatedRoleSchema = new ValidateF()
  .param("permissions", "لیست نقش کاربری")
  .array("string")
  .param("status", "وضعیت")
  .number()
  .param("name", "نام")
  .done();

/**************************/
/*         routes         */
/**************************/
router.get(
  "/permissions",
  use(authentication),
  use(authorization.or(["ADD_ROLES", "EDIT_ROLESss"])),
  use(listPermissions),
  serveJson
);

router.post(
  "/",
  use(validator(newRoleSchema)),
  use(authentication),
  use(authorization.or(["ADD_ROLES", "EDIT_ROLES"])),
  use(isUnique("Role", "نقش", "name", "نام")),
  use(validatePermissions),
  use(addRole),
  serveJson
);

router.get(
  "/",
  use(authentication),
  use(authorization.def("SEE_ROLES")),
  (req, res) => {return res.end('12')},
  filteredData({ id: { [Op.ne]: 1 } }),
  use(getRoles),
  serveJson
);

router.get(
  "/:uuid",
  use(authentication),
  use(authorization.def("SEE_ROLES")),
  use(getDataByUUID("Role", "نقش کاربری")),
  serveJson
);

router.put(
  "/:uuid",
  use(validator(updatedRoleSchema)),
  use(authentication),
  use(authorization.or(["SEE_ROLES", "EDIT_ROLES"])),
  use(isUnique("Role", "نقش", "name", "نام")),
  use(getDataByUUID("Role", "نقش کاربری")),
  updateRole,
  serveJson
);

////////////////////////////
/// schema tester
////////////////////////////
router.post("/schema", use(validator(roleSchema)), (req, res) => {
  res.end("ssssssssssss");
});

module.exports = router;
