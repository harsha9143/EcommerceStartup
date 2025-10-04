const path = require("path");

const productService = require("../services/productService");
const { sendErrorResponse, sendResponse } = require("../utils/errorHandler");

exports.getProducts = (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "products.html"));
};

exports.addProducts = (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "addProduct.html"));
};

exports.getProductById = (req, res, next) => {
  let productId = productService.getProductId(req);
  try {
    if (productId > 10) {
      let err = new Error("Product not found");
      err.statusCode = 404;

      throw err;
    }
    return sendResponse(res, productId, 200);
  } catch (error) {
    return sendErrorResponse(res, error);
  }
};
