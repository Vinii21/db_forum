const db = require("../utils/database")
const {DataTypes} = require("sequelize")

const Answers = db.define("answers", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "user_id"
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "post_id"
    }
},{
    timestamps: true,
    updatedAt: false,
    createdAt: "created_at"
})

module.exports = Answers;