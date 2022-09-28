const express = require("express");
const router = express.Router();

const authRouter = require("./auth");
router.use("/auth", authRouter);

const roleRouter = require("./role");
router.use("/roles", roleRouter);

// const userRouter = require("./user");
// router.use("/users", userRouter);

module.exports = router;
