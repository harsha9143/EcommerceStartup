exports.getCartItems = (req, res, next) => {
  res.send(`<h1>Fetching cart items</h1>`);
};

exports.getSingleItem = (req, res, next) => {
  res.send(`<h1>Fetching cart for user with ID: ${req.params.userId}</h1>`);
};

exports.addToCart = (req, res, next) => {
  res.send(
    `<h1>Adding product to cart for user with ID: ${req.params.userId}</h1>`
  );
};
