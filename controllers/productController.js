const path = require("path");

const productService = require("../services/productService");

exports.getProducts = (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "products.html"));
};

exports.addProducts = (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "addProduct.html"));
};

exports.getProductById = (req, res, next) => {
  let productId = productService.getProductId(req);
  res.send(`<h1>Fetching product with ID: ${productId}</h1>`);
};
