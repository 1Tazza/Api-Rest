import express from "express";
import { __dirname } from "../utils/utils.js";
import uploadMiddleware from "../utils/handleStorage.js";
const router = express()


router.post("/", uploadMiddleware.single("myfile") ,(req, res) => {
    res.send({a: 1})
})

export default router