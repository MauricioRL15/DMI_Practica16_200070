import Player from "../models/Player.js"


const createPlayer = async (rq, rs) => {
    console.log("Se ha solicitado la creacion de un nuevo jugador")
    const {name, email, nickname, birthdate} = rq.body
    console.log(rq.body)
    const newPlayer = await Player.create(rq.body)
    if (newPlayer) {
        rs.status(200);
        rs.json(`Se ha creado un nuevo jugador con el Nombre: ${name}, Email ${email}, Apodo:${nickname}, Fecha de Nacimiento: ${birthdate}`);
    }else{
        rs.status(400);
        rs.json({
            messageStatus: `Hubo un error al intentyar crear al jugador, revisa los parametros`
        })
    }
}

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

const updatePlayer = (rq, rs) => {
    const playerID = rq.params.playerID
    console.log(`Se ha solicitado una actualización de todos los datos del jugador con el id: ${playerID}`)
    rs.status(200)
    rs.send(`Se ha solicitado una actualización de todos los datos del jugador con el id: ${playerID}`)
}

const changePlayerPortrait = (rq, rs) => {
    const playerID = rq.params.playerID
    console.log(`Se ha solicitado el cambio de foto de perfil del jugador: ${playerID}`)
    rs.status(200)
    rs.send(`Se ha solicitado el cambio de foto de perfil del jugador: ${playerID}`)
} 

const deteletePlayer = (rq, rs) => {
    const playerID = rq.params.playerID
    console.log(`Se ha solicitado la eliminacion del jugador: ${playerID}`)
    rs.status(200)
    rs.send(`Se ha solicitado la eliminacion del jugador: ${playerID}`)
} 


export {createPlayer, findPlayerByID, findPlayerByEmail, updatePlayer, changePlayerPortrait, deteletePlayer, findAll}