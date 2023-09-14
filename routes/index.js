import express from "express"
import fs from "fs"
import dotenv from "dotenv"
dotenv.config()
const router = express.Router()

const PATH_ROUTES = process.env.ROUTE

const removeExtension = (filename) => {
    return filename.split(".").shift()
}

fs.readdirSync(PATH_ROUTES).filter( (file) => {
    const name = removeExtension(file)
    if(name !== "index") {
        import(`./${file}`).then((module)=> {
            router.use(`/${name}`, module.default)
        })
    }
})


export default router

