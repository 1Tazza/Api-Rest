import jwt from "jsonwebtoken";
import getProperties from "./handlePropertiesEngine.js";

const JWT_SECRET = process.env.JWT_SECRET

const propertiesKey = getProperties()

const tokenSign = (user) => {
    const sign = jwt.sign({
        [propertiesKey.id]: user[propertiesKey.id],
        role: user.role
    },
    JWT_SECRET,
    {
        expiresIn: "2h"
    })

    return sign
}

const verifyToken = async (tokenJwt) => {
    try{
       return jwt.verify(tokenJwt, JWT_SECRET)
    }catch(e) {
        return null
    }
}

export { tokenSign, verifyToken }