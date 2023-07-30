import express from "express"
import { validatorLogin, validatorRegister } from "../validators/auth.js";
import { matchedData } from "express-validator";
const router = express.Router();

router.post("/register", validatorRegister, (req, res) => {
    req = matchedData(req)
    res.send({data: req})
})


export default router