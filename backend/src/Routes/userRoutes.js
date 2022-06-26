const express = require("express");
const userRouter = express.Router();

const controller = require("../Controllers/userControllers");

userRouter.get('/userhome', controller.userHome)

userRouter.get('/', controller.getAllUsers)

module.exports = userRouter;