import controller from "../Controllers/postControllers.js"
import express from "express"
const postRouter = express.Router();

postRouter.get('/posthome', controller.postHome)

export default postRouter;