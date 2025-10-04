const express = require("express");

const userRouter = express.Router();

const userController = require("../controllers/userController");

userRouter.get("/", userController.getAllUsers);

userRouter.post("/", userController.addNewUser);

userRouter.get("/:id", userController.getUserById);

module.exports = userRouter;
