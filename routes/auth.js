import express from "express"
import { validatorRegister, validatorLogin } from "../validators/auth.js";
import { loginCtrl, registerCtrl } from "../controllers/auth.js";
const router = express.Router();

/**
 * http://localhost:3001/api
 * Route register new user
 * @openapi
 * /auth/register:
 *      post:
 *          tags:
 *              - auth
 *          summary: "Register new user"
 *          description: "Esta ruta es para registrar un nuevo usuario"
 *          requestBody:
 *              content: 
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/authRegister"
 *          responses: 
 *                  "201":
 *                      description: "Usuario Registrado de manera correcta"
 *                  "403": 
 *                      description: "Error por validación de usuario"
 */
router.post("/register", validatorRegister, registerCtrl)

router.post("/login", validatorLogin, loginCtrl)


export default router