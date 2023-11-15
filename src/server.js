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
// INSERT INTO `dmi_videogame_200070`.`tbb_players` (`id`, `name`, `email`, `password`, `nickname`, `birthdate`, `portrait_img`, `createdAt`) VALUES ('3', 'Arely', 'Areli@gmail.com', '7410', 'Arely2409', '2002-08-24', 'img3.jpg', '2023-11-14');
// INSERT INTO `dmi_videogame_200070`.`tbb_players` (`id`, `name`, `email`, `password`, `nickname`, `birthdate`, `portrait_img`, `createdAt`) VALUES ('4', 'Daniel', 'Daniel@gmail.com', '8520', 'Danieru', '2002-04-18', 'img4.jpg', '2023-11-14');
// INSERT INTO `dmi_videogame_200070`.`tbb_players` (`id`, `name`, `email`, `password`, `nickname`, `birthdate`, `portrait_img`, `createdAt`) VALUES ('5', 'Marco', 'Marco@gmail.com', '9630', 'Markohot', '2001-03-04', 'img5.jpg', '2023-11-14');