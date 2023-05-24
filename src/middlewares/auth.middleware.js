const jwt = require("jsonwebtoken")

const authenticate = (req, res, next)=>{
    try {
        // recuperar el token
        const token = req.headers["access-token"];

        if (!token) {
            return next({
                status: 401,
                name: "not token",
                message: "Token is not present on request headers"
            })
        }

        const decoded = jwt.verify(token, "jujutsukaisen", {
            algorithms: "HS512"
        })

        // el token esta expirado
        // el token es invalido

        req.user = decoded;
        next()
    } catch (error) {
       next({
        status: 498,
        name: "Invalid or expired token",
        message: error
       })
    }
}

module.exports = authenticate;