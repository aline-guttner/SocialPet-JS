import controller from "../Controllers/userControllers.js"
import express from "express"
import User from "../models/userModel.js"
const userRouter = express.Router();

userRouter.get('/userhome', controller.userHome)

userRouter.get('/', controller.getAllUsers)


userRouter.patch('/:id', getUser, controller.updateUser)

userRouter.delete('/:id', getUser, controller.deleteUser)

async function getUser(req, res, next) {
    let user
    try {
        user = await User.findById(req.params.id)
        if (user == null) {
            return res.status(404).json({ message: 'Cannot find user' })

        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.user = user
    next()
}
export default userRouter;

