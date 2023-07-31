import express from "express"
import { validatorRegister, validatorLogin } from "../validators/auth.js";
import { loginCtrl, registerCtrl } from "../controllers/auth.js";
const router = express.Router();

router.post("/register", validatorRegister, registerCtrl)

router.post("/login", validatorLogin, loginCtrl)


export default router