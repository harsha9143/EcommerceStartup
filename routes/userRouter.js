const express = require("express");

const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
  res.send("<h1>Fetching all users</h1>");
});

userRouter.post("/", (req, res, next) => {
  res.send("<h1>Adding a new user</h1>");
});

userRouter.get("/:id", (req, res, next) => {
  res.send(`<h1>Fetching user with ID: ${req.params.id} </h1>`);
});

module.exports = userRouter;
