const path = require("path");

exports.getAllUsers = (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "users.html"));
};

exports.addNewUser = (req, res, next) => {
  res.send(path.join(__dirname, "..", "views", "addUser.html"));
};

exports.getUserById = (req, res, next) => {
  res.send(`<h1>Fetching user with ID: ${req.params.id} </h1>`);
};
