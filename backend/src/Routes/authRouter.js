import Authcontroller from "../Controllers/authController.js";
import express from "express"

const router = express.Router();

router.post("/register", Authcontroller.userRegister)
router.post("/login", Authcontroller.login)
// router.post("/forgot-password", undefined)
// router.post("/reset-password", undefined)

router.get('/userhome', Authcontroller.userHome)

router.get('/', Authcontroller.getAllUsers)

router.get('/:id', Authcontroller.getOneUser)

router.get('/:id', Authcontroller.getOneUser)

router.patch('/:id', Authcontroller.updateUser)

router.delete('/:id', Authcontroller.deleteUser)

export default router; //dsaas