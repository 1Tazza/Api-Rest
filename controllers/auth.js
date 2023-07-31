import { matchedData } from "express-validator"
import { encrypt } from "../utils/handlepassword.js"
import { tokenSign } from "../utils/handleJwt.js"
import { Users } from "../models/index.js"

const loginCtrl = async(req,res) => {
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
}

export {loginCtrl}