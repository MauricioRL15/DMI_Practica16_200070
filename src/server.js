import express from "express"
import playerRoutes from "./routes/playerRoutes.js"
import dbConnection from "./config/db.js"
import Player from "./models/Player.js";


const api = new express();

const port = 20007

api.use("/players", playerRoutes)

api.listen(port, () =>{
    console.log(`Server is running in port: ${port}`)
})

try {
    console.log("STATUS -> Intentando conectarse a la base de datos...");
    dbConnection.authenticate();
    console.log("STATUS -> Conexión a la base de datos exitosa...");
    console.log("STATUS -> Sincronizando la base de datos con los Objetos existentes...");
    dbConnection.sync();
    console.log("STATUS -> Base de Datos lista para realizar operaciones");
} catch (error) {
    console.error("Han ocurrido errores intentando conectarse a la base de datos");
    console.error(error);
    
}