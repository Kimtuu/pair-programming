const notFoundMiddleware = (req, res, next) => {
  const err = {
    code: 404,
    message: "Not Found",
  };
  next(err);
};

module.exports = notFoundMiddleware;
