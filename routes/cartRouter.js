const express = require("express");

const cartRouter = express.Router();

const cartController = require("../controllers/cartController");

cartRouter.get("/", cartController.getCartItems);

cartRouter.get("/:id", cartController.getSingleItem);

cartRouter.post("/:id", cartController.addToCart);

module.exports = cartRouter;
