const {Sequelize} = require("sequelize")

const db = new Sequelize({
    host: "localhost",
    port: 5432,
    database: "db_forum",
    username: "postgres",
    password: "root",
    dialect: "postgres"
})

module.exports = db;