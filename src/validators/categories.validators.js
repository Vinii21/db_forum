const { check } = require("express-validator")
const validateResult = require("../utils/validate")

const createCategoriesValidator = [
    check("category", "Error con el campo category")
        .exists()
        .withMessage("No se esta enviando la categoria")
        .notEmpty()
        .withMessage("El nombre de la categoria no puede estar vacio")
        .isString()
        .withMessage("La categoria debe ser en formato string")
        .isLength({min:7, max:50})
        .withMessage("La categoria debe tener un minimo de 7 caracteres y un maximo de 50 caracteres"),
    check("description", "Error con el campo descrition")
        .exists()
        .withMessage("No se esta enviando la descripcion de la categoria")
        .notEmpty()
        .withMessage("La descripcion no puede estar vacia")
        .isString()
        .withMessage("La descripción debe ser un texto")
        .isLength({min: 10})
        .withMessage("La descripción debe tener minimo 10 caracteres"),
        validateResult
]

module.exports = {createCategoriesValidator}

