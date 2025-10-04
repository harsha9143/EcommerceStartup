const path = require("path");

const { sendErrorResponse, sendResponse } = require("../utils/errorHandler");

exports.getAllUsers = (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "users.html"));
};

exports.addNewUser = (req, res, next) => {
  res.send(path.join(__dirname, "..", "views", "addUser.html"));
};

exports.getUserById = (req, res, next) => {
  try {
    if (req.params.id > 10) {
      let err = new Error("user not found");
      err.statusCode = 404;

      throw err;
    }

    return sendResponse(res, req.params.id, 200);
  } catch (error) {
    return sendErrorResponse(res, error);
  }
};
