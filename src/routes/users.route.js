const {Router} = require("express")
const {createUser, login} = require("../controllers/users.controller")
const {createUserValidator, loginUserValidator} = require("../validators/user.validators")

const router = Router()

router.post("/users", createUserValidator, createUser)
router.post("/users/login", loginUserValidator, login)



module.exports = router;