import dotenv from "dotenv"
dotenv.config()
import { Tracks } from "../../models/index.js"

const ENGINE_DB = process.env.ENGINE_DB

const findAllDB = async() => {
    
    if(ENGINE_DB === "nosql") {
       return await Tracks.find({});
    }
    else {
        return await Tracks.findAll()
    }
    
}

export default findAllDB