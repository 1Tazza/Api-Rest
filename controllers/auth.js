import { matchedData } from "express-validator"
import { encrypt } from "../utils/handlepassword.js"
import { tokenSign } from "../utils/handleJwt.js"
import { Users } from "../models/index.js"
import {handleHttpError} from "../utils/handleError.js"
import bcrypt from "bcryptjs"

const registerCtrl = async(req,res) => {
    try{
    req = matchedData(req)
    const password = await encrypt(req.password)
    const body = {...req, password}
    const dataUser = await Users.create(body)
    dataUser.set("password", undefined, {strict: false})

    const data = {
        user: dataUser,
        token: tokenSign(dataUser)
    }

    res.send({data: data})
    }catch(e) {
        handleHttpError(res, "REGISTER_USER_EROR")
    }
}

const loginCtrl = async(req, res) => {
    try{ 
        req = matchedData(req)
        const user = await Users.findOne({email: req.email})
        .select("password name role email")
        if(!user) {
            handleHttpError(res, "USER_NOT_EXISTS", 404)
            return
        }

        const hashPassword = user.get("password");

        const check = bcrypt.compare(req.password, hashPassword)

        if(!check) {
            handleHttpError(res, "PASSWORD_INVALID", 401)
            return
        }

        user.set("password", undefined, {strict: false})
        const data = {
            token: tokenSign(user),
            user
        }

        res.send({data})

    }catch(e){
        console.log(e)
        handleHttpError(res, "ERROR_LOGIN_USER")
    }
}


export {registerCtrl, loginCtrl}