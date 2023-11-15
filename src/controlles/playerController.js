import Player from "../models/Player.js"

const createPlayer = (rq, rs) => {
    console.log("Se ha solicitado la creacion de un nuevo jugador")
    rs.status(200)
    rs.send("Se ha solicitado la creacion de un nuevo jugador")
}

const findAll = async(rq, rs) =>{
    console.log("Se ha solicitado consulta de todos los jugadores");
    const allPlayers = await Player.findAll();
    console.log(allPlayers);
    rs.status(200);
    rs.json(allPlayers);
    // const allPlayers = Player.findAll()
    // console.log(allPlayers.every(player => player instanceof Player));
    // console.log("All Players: ", JSON.stringify(allPlayers, null, 2));
    // rs.status(200)
    // rs.send("Se ha solicitado encontrar todos los jugadores")
}

const findPlayerByID = (rq, rs) => {
    const playerID = rq.params.playerID
    console.log(`Se ha solicitado buscar al jugador con el id: ${playerID}`)
    rs.status(200)
    rs.send(`Se ha solicitado buscar al jugador con el id: ${playerID}`)
}

const findPlayerByEmail = (rq, rs) => {
    const playerEmail = rq.params.playerID
    console.log(`Se ha solicitado buscar al jugador con el correo: ${playerEmail}`)
    rs.status(200)
    rs.send(`Se ha solicitado buscar al jugador con el correo: ${playerEmail}`)
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