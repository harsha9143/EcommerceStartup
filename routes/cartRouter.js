const express = require("express");

const cartRouter = express.Router();

const cartController = require("../controllers/cartController");

cartRouter.get("/", cartController.getCartItems);

cartRouter.get("/:userId", cartController.getSingleItem);

cartRouter.post("/:userId", cartController.addToCart);

module.exports = cartRouter;
