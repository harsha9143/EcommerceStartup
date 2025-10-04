const { sendErrorResponse, sendResponse } = require("../utils/errorHandler");

exports.getCartItems = (req, res, next) => {
  res.send(`<h1>Fetching cart items</h1>`);
};

exports.getSingleItem = (req, res, next) => {
  try {
    if (req.params.id > 10) {
      let err = new Error("Item not in cart");
      err.statusCode = 404;

      throw err;
    }

    return sendResponse(res, req.params.id, 200);
  } catch (error) {
    return sendErrorResponse(res, error);
  }
};

exports.addToCart = (req, res, next) => {
  try {
    if (req.params.id < 10) {
      let err = new Error("Item already exists in cart");
      err.statusCode = 404;

      throw err;
    }

    return sendResponse(res, req.params.id, 200);
  } catch (error) {
    return sendErrorResponse(res, error);
  }
  res.send(
    `<h1>Adding product to cart for user with ID: ${req.params.userId}</h1>`
  );
};
