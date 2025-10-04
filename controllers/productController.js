const productService = require("../services/productService");

exports.getProducts = (req, res, next) => {
  res.send("<h1>Fetching all products</h1>");
};

exports.addProducts = (req, res, next) => {
  res.send("<h1>Adding a new product</h1>");
};

exports.getProductById = (req, res, next) => {
  let productId = productService.getProductId(req);
  res.send(`<h1>Fetching product with ID: ${productId}</h1>`);
};
