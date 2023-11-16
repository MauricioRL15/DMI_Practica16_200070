import { DataTypes } from "sequelize";
import dbConnection from "../config/db.js";

const Player = dbConnection.define("tbb_players",
{
    name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    email:{
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    password:{
        type: DataTypes.STRING(255),
        allowNull: false
    },
    nickname:{
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
    },
    birthdate:{
        type:DataTypes.DATE,
        allowNull:false
    },
    portrait_img: DataTypes.STRING(255),



}
)  

export default Player;

// INSERT INTO `dmi_videogame_200070`.`tbb_players` (`id`, `name`, `email`, `password`, `nickname`, `birthdate`, `portrait_img`, `createdAt`) VALUES ('3', 'Arely', 'Areli@gmail.com', '7410', 'Arely2409', '2002-08-24', 'img3.jpg', '2023-11-14');
// INSERT INTO `dmi_videogame_200070`.`tbb_players` (`id`, `name`, `email`, `password`, `nickname`, `birthdate`, `portrait_img`, `createdAt`) VALUES ('4', 'Daniel', 'Daniel@gmail.com', '8520', 'Danieru', '2002-04-18', 'img4.jpg', '2023-11-14');
// INSERT INTO `dmi_videogame_200070`.`tbb_players` (`id`, `name`, `email`, `password`, `nickname`, `birthdate`, `portrait_img`, `createdAt`) VALUES ('5', 'Marco', 'Marco@gmail.com', '9630', 'Markohot', '2001-03-04', 'img5.jpg', '2023-11-14');