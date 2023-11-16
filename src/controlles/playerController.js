import Player from "../models/Player.js"


const createPlayer = async (req, res) => {
    try {
        console.log("Se ha solicitado la creación de un nuevo jugador");
        const { name, email, nickname, birthdate } = req.body;
        console.log(req.body);

        const newPlayer = await Player.create(req.body);

        if (newPlayer) {
            res.status(200).json({
                message: `Se ha creado un nuevo jugador con Nombre: ${name}, Email: ${email}, Apodo: ${nickname}, Fecha de Nacimiento: ${birthdate}`
            });
        } else {
            res.status(400).json({
                message: "Hubo un error al intentar crear al jugador. Revisa los parámetros."
            });
        }
    } catch (error) {
        console.error("Error al crear un jugador:", error);
        res.status(500).json({
            message: "Hubo un error interno al intentar crear al jugador."
        });
    }
};

const findAll = async(rq, rs) =>{
    console.log("Se ha solicitado consulta de todos los jugadores");
    const allPlayers = await Player.findAll();
    console.log(allPlayers);

    if (allPlayers === null) {
        rs.json({
            messageStatus: `No hay jugadores registrados.`
        });
    }else{
        rs.status(200);
        rs.json(allPlayers);
    }
}

const findPlayerByID = async (rq, rs) => {
    const playerID = rq.params.playerID
    console.log(`Se ha solicitado buscar al jugador con el id: ${playerID}`)
    const playerFound = await Player.findByPk(playerID)
    if(playerFound === null){
        rs.status(400)
        rs.json({
            messageStatus: `El jugador con ID: ${playerID}, no esta esta en la BD`
        });
        console.log(`El jugador con ID: ${playerID}, no esta esta en la BD`);
    }else{
        rs.status(200)
        rs.json(playerFound);
    }   
}

const findPlayerByEmail = async (rq, rs) => {
    const playerEmail = rq.params.playerEmail
    console.log(`Se ha solicitado buscar al jugador con el correo: ${playerEmail}`)
    const playerFoundEmail = await Player.findOne({where : {email : playerEmail}})

    if(playerFoundEmail === null){
        rs.status(400)
        rs.json({
            messageStatus: `El jugador con el correo: ${playerEmail}, no esta esta en la BD`
        });
        console.log(`El jugador con el correo: ${playerEmail}, no esta esta en la BD`);
    }else{
        rs.status(200)
        rs.json(playerFoundEmail);
    }   
}

// const updatePlayer = (rq, rs) => {
//     const playerID = rq.params.playerID
//     console.log(`Se ha solicitado una actualización de todos los datos del jugador con el id: ${playerID}`)
//     rs.status(200)
//     rs.send(`Se ha solicitado una actualización de todos los datos del jugador con el id: ${playerID}`)
// }

const updatePlayer = async (req, res) => {
    try {
        const playerID = req.params.playerID;
        console.log(`Se ha solicitado una actualización de todos los datos del jugador con el id: ${playerID}`);

        const updatedPlayer = await Player.update(req.body, {
            where: {
                id: playerID
            }
        });

        if (updatedPlayer[0] === 1) {
            res.status(200).json({
                message: `Se ha actualizado el jugador con ID: ${playerID}`
            });
        } else {
            res.status(404).json({
                message: `El jugador con ID: ${playerID} no fue encontrado en la base de datos.`
            });
        }
    } catch (error) {
        console.error("Error al actualizar el jugador:", error);
        res.status(500).json({
            message: "Hubo un error interno al intentar actualizar el jugador."
        });
    }
};

const changePlayerPortrait = (rq, rs) => {
    const playerID = rq.params.playerID
    console.log(`Se ha solicitado el cambio de foto de perfil del jugador: ${playerID}`)
    rs.status(200)
    rs.send(`Se ha solicitado el cambio de foto de perfil del jugador: ${playerID}`)
} 

// const deteletePlayer = (rq, rs) => {
//     const playerID = rq.params.playerID
//     console.log(`Se ha solicitado la eliminacion del jugador: ${playerID}`)
//     rs.status(200)
//     rs.send(`Se ha solicitado la eliminacion del jugador: ${playerID}`)
// } 

const deletePlayer = async (req, res) => {
    try {
        const playerID = req.params.playerID;
        console.log(`Se ha solicitado la eliminación del jugador con ID: ${playerID}`);

        const deletedPlayerCount = await Player.destroy({
            where: {
                id: playerID
            }
        });

        if (deletedPlayerCount === 1) {
            res.status(200).json({
                message: `Se ha eliminado el jugador con ID: ${playerID}`
            });
        } else {
            res.status(404).json({
                message: `El jugador con ID: ${playerID} no fue encontrado en la base de datos.`
            });
        }
    } catch (error) {
        console.error("Error al eliminar el jugador:", error);
        res.status(500).json({
            message: "Hubo un error interno al intentar eliminar el jugador."
        });
    }
};

export {createPlayer, findPlayerByID, findPlayerByEmail, updatePlayer, changePlayerPortrait, deletePlayer, findAll}