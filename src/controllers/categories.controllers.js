const Categories = require('../models/categories.model');

const findAllCategories = async (req, res, next) => {
    try{
        const categories = await Categories.findAll()
        res.json(categories)
    } catch (error) {
        next(error)
    }
};

const createCategory = async (req, res, next) => {
    try{
        const {category, description} = req.body;
        await Categories.create({category, description})
        res.status(201).send()
    } catch (error) {
        next(error)
    }
};


module.exports = {
    findAllCategories,
    createCategory
}