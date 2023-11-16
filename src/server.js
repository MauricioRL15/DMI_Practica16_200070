import express from "express";
import playerRoutes from "./routes/playerRoutes.js";
import dbConnection from "./config/db.js";
// No es necesario importar 'body-parser'

const app = express();
const port = 20007;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/players", playerRoutes);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

try {
    console.log("STATUS -> Intentando conectarse a la base de datos...");
    await dbConnection.authenticate();
    console.log("STATUS -> Conexión a la base de datos exitosa...");
    // Puedes eliminar la línea siguiente si no necesitas la sincronización automática
    // await dbConnection.sync();
    console.log("STATUS -> Base de Datos lista para realizar operaciones");
} catch (error) {
    console.error("Han ocurrido errores intentando conectarse a la base de datos");
    console.error(error);
}
