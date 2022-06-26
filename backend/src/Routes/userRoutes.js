const express = require("express");
const userRouter = express.Router();

const controller = require("../Controllers/userControllers");

userRouter.get('/userhome', controller.userHome)

module.exports = userRouter;