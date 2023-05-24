const Users = require("./users.model")
const Roles = require("./roles.model")
const Answers = require("./answers.model")
const Posts = require("./posts.model")
const Categories = require("./categories.model")

const initModels = () => {
    Users.belongsTo(Roles, {foreignKey: "rolId"});
    Roles.hasMany(Users, {foreignKey: "rolId"});

    //una respuesta le pretenece a un usuario
    Answers.belongsTo(Users, {foreignKey: "userId"})
    // un user tiene muchas respuestas
    Users.hasMany(Answers, {foreignKey: "userId"})
    
    //un arespuesta le pertenece a una publicacion
    Answers.belongsTo(Posts, {foreignKey: "postId"})
    //una publicacion tiene muchas respuestas
    Posts.hasMany(Answers, {foreignKey: "postId"})

    // un user crea muchos post
    Posts.belongsTo(Users, {foreignKey: "userId"})
    // un post le pertenece a un user
    Users.hasMany(Posts, {foreignKey: "userId"})

    //un post le pretenece a una categoria
    Posts.belongsTo(Categories, {foreignKey: "categoryId"})
    //una categoria tiene muchos post
    Categories.hasMany(Posts, {foreignKey: "categoryId"})
}

module.exports = initModels;
// un usuario tiene un rol o vario? 1 (belongsTo) Users.belongsTo(Roles);
// un rol puede estar en varios user o uno? M (hasMany) Roles.hasMany(Users);
// 1 - M