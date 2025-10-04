const express = require("express");

const productRouter = express.Router();

const productController = require("../controllers/productController");

productRouter.get("/", productController.getProducts);

productRouter.post("/", productController.addProducts);

productRouter.get("/:id", productController.getProductById);

module.exports = productRouter;
