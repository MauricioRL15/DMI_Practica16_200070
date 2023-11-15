import { Sequelize, DataTypes } from 'sequelize';
import dotenv from "dotenv"
dotenv.config({path : "src/.env"})

const dbConnection = new Sequelize (
    // "dmi_videogame_200070",
    // "Mauricio",
    // "011015",
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host : process.env.HOST,
        port: process.env.DB_PORT,
        dialect: "mysql"
    }
)

export default dbConnection;