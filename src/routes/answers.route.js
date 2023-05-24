const {Router} = require("express")
const {createAnswerValidator} = require("../validators/answer.validators")
const { createAnswer } = require("../controllers/answers.controllers")
const authenticate  = require("../middlewares/auth.middleware")

const router = Router()

router.post("/answers", authenticate, createAnswerValidator, createAnswer)

module.exports = router