const db = require("../utils/database")
const {DataTypes} = require("sequelize")

const Categories = db.define("categories", {
    category: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    }
},{
    timestamps: false
})

module.exports = Categories;