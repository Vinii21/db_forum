const express = require("express");
require("dotenv").config();
const apiRoutes = require("./routes/index");
const errorRoutes = require("./routes/errors.routes");
const initModels = require("./models/initModels");



initModels()

const PORT = process.env.PORT || 3000;

const app = express()

app.use(express.json())

app.get("/", (req, res)=>{
    res.send("Iniciado")
})

// agrupar todas las rutas en un archivo 
apiRoutes(app)

/* agrupar todos los manejadores de errores */
errorRoutes(app)

app.listen(PORT, ()=>{
    console.log(`Servidor iniciado en el puerto ${PORT}`)
})

/*  */
// instalar dbaver 