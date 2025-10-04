exports.getAllUsers = (req, res, next) => {
  res.send("<h1>Fetching all users</h1>");
};

exports.addNewUser = (req, res, next) => {
  res.send("<h1>Adding a new user</h1>");
};

exports.getUserById = (req, res, next) => {
  res.send(`<h1>Fetching user with ID: ${req.params.id} </h1>`);
};
