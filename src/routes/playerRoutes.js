import  Express  from "express"
import { createPlayer, findPlayerByID, findPlayerByEmail, updatePlayer, changePlayerPortrait, deletePlayer, findAll } from "../controlles/playerController.js"

const router = Express.Router()

router.post("/newPlayer", createPlayer)
router.get("/findOneById/:playerID", findPlayerByID)
router.get("/findAll", findAll)
router.get("/findOneByEmail/:playerEmail", findPlayerByEmail)
router.put("/update/:playerID", updatePlayer)
router.patch("/changePortrait/:playerID", changePlayerPortrait)
router.delete("/deletePlayer/:playerID", deletePlayer)

export default router
