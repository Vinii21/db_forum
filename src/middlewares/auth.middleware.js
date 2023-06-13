// * jwt
const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  try {
    // recuperar el token
    // change authentication with bearer token
    const token = req.headers.authorization.split(' ')[1];
    console.log(token);

    if (!token) {
      console.log("error en validacion");
      // ! esto es un error --> next (error)
      return next({
        status: 401,
        name: "no token",
        message: "Token is not present on request headers",
      });
    }

    const decoded = jwt.verify(token, "parangaricutirimucuaro", {
      algorithms: "HS512",
    });

    // el token esta expirado
    // token es invalido

    req.user = decoded;
    next();
  } catch (error) {
    next({
      status: 498,
      name: "invalid or expired token",
      message: error,
    });
  }
};

module.exports = authenticate;
