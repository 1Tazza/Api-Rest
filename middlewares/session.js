import {handleHttpError} from "../utils/handleError.js"
import {verifyToken} from "../utils/handleJwt.js"
import {Users} from "../models/index.js"

const authMiddleware = async(req, res, next) => {
    try{
      if(!req.headers.authorization){
        handleHttpError(res, "NOT_TOKEN", 401)
        return
      }

    const token = req.headers.authorization.split(" ").pop();
    const dataToken = await verifyToken(token)

    if(!dataToken._id){
        handleHttpError(res, "ERROR_ID_TOKEN", 401)
        return
    }
  
    const user = await Users.findById(dataToken._id)
  
    req.user = user

    next()

    }catch(e){
        handleHttpError(res, "NOT_SESSION", 401)
    }
}

export {authMiddleware}