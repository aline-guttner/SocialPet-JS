const express = require("express");
const userRouter = express.Router();

const controller = require("../Controllers/userControllers");

userRouter.get('/userhome', controller.userHome)

userRouter.get('/', controller.getAllUsers)

userRouter.post('/', controller.createUser)

userRouter.patch('/:id', controller.getUser, controller.updateUser)

module.exports = userRouter;

