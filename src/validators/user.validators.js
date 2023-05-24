// check --> verificar / revisar / chequear / validar
const { check } = require("express-validator")
const validateResult = require("../utils/validate")

const createUserValidator = [
    check("username", "Error con el campo username")
        .exists()
        .withMessage("No se esta enviando el username")
        .notEmpty()
        .withMessage("Username no debe estar vacio")
        .isString()
        .withMessage("El tipo de dato debe ser string")
        .isLength({min: "6", max:"30"})
        .withMessage("El username debe tener minimo 6 caracteres y maximo 30"),
    check("email", "Error con el campo email")
        .exists()
        .withMessage("El email es obligatorio")
        .notEmpty()
        .withMessage("Email no puede estar vacio")
        .isString()
        .withMessage("Email debe ser un string")
        .isEmail()
        .withMessage("Email no tiene formato de correo")
        .isLength({min: "10", max:"50"})
        .withMessage("El email debe tener un minimo de 10 caracteres y maximo 50"),
    check("password", "Error con el password")
        .exists()
        .withMessage("El password es obligatorio")
        .notEmpty()
        .withMessage("Password no puede estar vacio")
        .isString()
        .withMessage("Password debe ser un string")
        .isLength({min: 3})
        .withMessage("El password debe tener un minimo de 20 caracteres"),
        validateResult,

]

const loginUserValidator = [
    check("email", "Error con el campo email")
        .exists()
        .withMessage()
        .notEmpty()
        .isEmail()
        .isString()
        .isLength({min: 10, max:50}),
    check("password", "Error con el campo password")
        .exists()
        .notEmpty()
        .isString()
        .isLength({min: 4}),
        validateResult
]

module.exports = { createUserValidator, loginUserValidator };