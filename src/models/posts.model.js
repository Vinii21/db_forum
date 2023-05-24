const db = require("../utils/database")
const {DataTypes} = require("sequelize")

const Posts = db.define("posts", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "user_id"
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "category_id"
    }
},{
    timestamps: true,
    updatedAt: false,
    createdAt: "created_at"
})

module.exports = Posts;