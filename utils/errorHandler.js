exports.sendErrorResponse = (res, err) => {
  return res
    .status(err.statusCode)
    .json({ message: err.message, status: false });
};

exports.sendResponse = (res, data, statusCode) => {
  return res.status(statusCode).json({ data, status: true });
};
