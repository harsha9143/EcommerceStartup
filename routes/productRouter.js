const express = require("express");

const productRouter = express.Router();

productRouter.get("/", (req, res, next) => {
  res.send("<h1>Fetching all products</h1>");
});

productRouter.post("/", (req, res, next) => {
  res.send("<h1>Adding a new product</h1>");
});

productRouter.get("/:id", (req, res, next) => {
  res.send(`<h1>Fetching product with ID: ${req.params.id}</h1>`);
});

module.exports = productRouter;
