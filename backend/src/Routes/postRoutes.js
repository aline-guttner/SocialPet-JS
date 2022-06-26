const express = require("express");
const postRouter = express.Router();

const controller = require("../Controllers/postControllers");

postRouter.get('/posthome', controller.postHome)

module.exports = postRouter;