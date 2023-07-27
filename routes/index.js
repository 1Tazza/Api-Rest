import express from "express"
import fs from "fs"
import {fileURLToPath} from "url";
import { dirname } from "path";

const router = express.Router()

const __filename = fileURLToPath(import.meta.url);
const PATH_ROUTES = dirname(__filename);

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

