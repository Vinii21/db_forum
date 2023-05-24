const Users = require("../models/users.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const createUser = async (req, res) => {
    try{
        const {username, email, password} = req.body;
        const hashed = await bcrypt.hash(password, 11);
        await Users.create({username, email, password: hashed})
        res.status(201).send()
    } catch (error) {
       res.status(400).json(error) 
    }
}

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await Users.findOne({
            where: {email}
        })

        if (!user) {
            return next({
                status: 400,
                name: "invalid email",
                message: "email not exist"
            })
        }

        const validPassword = await bcrypt.compare(password, user.password)

        if(!validPassword){
            return next({
                status: 400,
                name: "Invalid password",
                message: "you shall not pass"
            })
        }

        const {firstname, lastname, id, username, rolId} = user;

        //debemos devolver un token para que el usuario logueado 
        //pueda acceder a los recursos del back

        // generar token
        const userData = {firstname, lastname, id, username, rolId, email}
        const token = jwt.sign(userData, "jujutsukaisen", {
            algorithm: "HS512",
            expiresIn: "5m"
        });

        // agregar el token en userData
        userData.token = token;


        res.json(userData)

    } catch (error) {
        next(error)
    }
}

module.exports = {
    createUser,
    login
}