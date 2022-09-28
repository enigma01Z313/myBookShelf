const express = require("express");
const router = express.Router();
const use = require("../src/utils/use");
const serveJson = require("../src/middleware/serveJson");
const { ValidateF, validator } = require("../src/middleware/validate");
const userById = require("../src/middleware/gets/userById");

const {
  authornticate,
  oneTimeLogin,
  oneTimeConfirm,
} = require("../src/services/auth");

/**************************/
/*   validation schemas   */
/**************************/
const loginSchema = new ValidateF()
  .phoneSchema()
  .param("password", "رمز عبور")
  .required()
  .done();

const phoneSchema = new ValidateF().phoneSchema().done();

const confirmCodeSchema = new ValidateF()
  .param("confirmCode", "کد تایید")
  .required()
  .length(6)
  .done();

/**************************/
/*         routes         */
/**************************/
router.post(
  "/login",
  use(validator(loginSchema)),
  use(authornticate),
  serveJson
);

router.post("/", use(validator(phoneSchema)), use(oneTimeLogin), serveJson);

router.post(
  "/:userId",
  use(validator(confirmCodeSchema)),
  use(userById),
  use(oneTimeConfirm),
  serveJson
);

module.exports = router;
