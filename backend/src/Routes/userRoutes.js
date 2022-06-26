const express = require("express");
const userRouter = express.Router();

const controller = require("../Controllers/userControllers");

userRouter.get('/userhome', controller.userHome)

userRouter.get('/', controller.getAllUsers)

userRouter.post('/', controller.createUser)

module.exports = userRouter;