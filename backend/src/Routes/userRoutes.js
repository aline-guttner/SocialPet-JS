import controller from "../Controllers/userControllers.js"
import express from "express"
import User from "../models/userModel.js"
const userRouter = express.Router();

userRouter.get('/userhome', controller.userHome)

userRouter.get('/', controller.getAllUsers)

userRouter.get('/:id', controller.getOneUser)

userRouter.patch('/:id', controller.updateUser)

userRouter.delete('/:id', controller.deleteUser)



export default userRouter;

