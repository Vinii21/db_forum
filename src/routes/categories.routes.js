const {Router} = require("express")
const {findAllCategories, createCategory} = require("../controllers/categories.controllers")
const {createCategoriesValidator} = require("../validators/categories.validators")
const authenticate = require("../middlewares/auth.middleware")
const {isAdmin} = require("../middlewares/role.middleware.js")

const router = Router()

router.get("/categories", findAllCategories)

router.post("/categories", authenticate, isAdmin, createCategoriesValidator, createCategory)

module.exports = router;