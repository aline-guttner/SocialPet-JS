import Authcontroller from "../Controllers/authController.js";
import express from "express"

const router = express.Router();

router.post("/register", Authcontroller.userRegister)
router.post("/login", Authcontroller.login)
// router.post("/forgot-password", undefined)
// router.post("/reset-password", undefined)


export default router;