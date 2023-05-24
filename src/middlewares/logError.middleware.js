// mostrar el error en consola
// pasar al siguiente middleware
const logError = (err, req, res, next) => {
    console.log(err)
    next(err)
}

module.exports = logError;