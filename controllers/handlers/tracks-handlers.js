import dotenv from "dotenv"
dotenv.config()
import { Tracks } from "../../models/index.js"

const ENGINE_DB = process.env.ENGINE_DB

const findAllDB = async(req) => {

    if(ENGINE_DB === "nosql") {
       return await Users.findOne({email: req.email}).select("password name role email")
    }
    else {
        return await Users.findOne({where: {email: req.email}})
    }
   
}

export default userProperties