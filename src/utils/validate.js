const { validationResult } = require("express-validator")

const validateResult = (req, res, next) => {
    try {
        validationResult(req).throw();
        return next();
    } catch (error) {
        next({
            status: 400,
            name: "Validation error",
            message: error.errors.map((e)=>e.msg)
        })
    }
}

module.exports = validateResult;