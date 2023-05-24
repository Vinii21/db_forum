const {Router} = require("express")
const {createPost, getPostByCategory, getPostWithAnswers} = require("../controllers/posts.controllers")
const authenticate = require("../middlewares/auth.middleware")

const router = Router()

// TODO proteger esta ruta
router.post("/posts", authenticate, createPost)

router.get("/posts/:categoryId", getPostByCategory)

router.get("/posts/:id/answers", getPostWithAnswers)

module.exports = router;