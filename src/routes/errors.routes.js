const logError = require("../middlewares/logError.middleware")
const ormErrorHandler = require("../middlewares/ormErrorHandler.middleware")
const errorHandler = require("../middlewares/errorHandler.middleware")

const errorRoutes = (app) => {
    app.use(logError, ormErrorHandler, errorHandler)
    
    // manejar el 404
    app.use("*", (req, res)=>{
        res.status(404).json({
            message: "Lo siento, esta ruta no existe"
        })
    })
}


module.exports = errorRoutes;