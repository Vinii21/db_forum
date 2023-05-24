const Answers = require("../models/answers.model")

const createAnswer = async (req, res, next) => {
    try{
        const {content, userId, postId} = req.body;
        await Answers.create({content, userId, postId})
        res.status(201).send()
    } catch (error) {
        next(error)
    }
};

module.exports = {
    createAnswer
}