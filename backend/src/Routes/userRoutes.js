const express = require("express");
const userRouter = express.Router();

const controller = require("../Controllers/userControllers");

router.get('/', controller.home)

module.exports = userRouter;