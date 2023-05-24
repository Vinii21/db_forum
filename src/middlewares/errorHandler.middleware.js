/* 
    next({
        status: 401,
        name: "not token provided",
        message: "Token is not present into request headers"
    })
*/

const errorHandler = (err, req, res, next) => {
    // el status de error puede variar
    const {status} = err;
    return res.status(status || 500).json({
        errorName: err.name,
        message: err.message
    })
}

module.exports = errorHandler;