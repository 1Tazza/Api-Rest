import express from "express"
import { validatorRegister } from "../validators/auth.js";
import { loginCtrl } from "../controllers/auth.js";
const router = express.Router();

router.post("/register", validatorRegister, loginCtrl)


export default router