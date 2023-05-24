const Answers = require("../models/answers.model");
const Post = require("../models/posts.model")
const Users = require("../models/users.model")

const createPost = async (req, res, next) => {
    try {
       const newPost = req.body;
       await Post.create(newPost) 
       res.status(201).send()
    } catch (error) {
        next(error)
    }
};

const getPostByCategory = async (req, res, next) => {
    try{
        const {categoryId} = req.params;
        const posts = await Post.findAll({
            where: {categoryId},
            attributes: {exclude: ["categoryId", "description", "userId"]},
            include: [
                {
                    model: Users,
                    attributes: {exclude:["username", "id"]}
                }
            ]
        })
        res.json(posts)
    } catch (error) {
        next(error)
    }
};

const getPostWithAnswers = async (req, res, next) => {
    try{
        const {id} = req.params;
        const post = await Post.findByPk(id, {
            attributes: {exclude:["userId", "categoryId"]},
            include: [
                {
                    model: Users,
                    attributes: ["id", "username"]
                },
                {
                    model: Answers,
                    include: ["content", "created_at"],
                    include: [
                        {
                            model: Users,
                            attributes: ["id", "username"]
                        }
                    ]
                }
            ]
        })
        res.json(post)
    } catch (error) {
        next(error)
    }
};

module.exports = {
    createPost,
    getPostByCategory,
    getPostWithAnswers
}