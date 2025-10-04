const express = require("express");

const cartRouter = express.Router();

cartRouter.get("/", (req, res, next) => {
  res.send(`<h1>Fetching cart items</h1>`);
});

cartRouter.get("/:userId", (req, res, next) => {
  res.send(`<h1>Fetching cart for user with ID: ${req.params.userId}</h1>`);
});

cartRouter.post("/:userId", (req, res, next) => {
  res.send(
    `<h1>Adding product to cart for user with ID: ${req.params.userId}</h1>`
  );
});

module.exports = cartRouter;
