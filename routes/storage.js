import express from "express";
import uploadMiddleware from "../utils/handleStorage.js";
import { createItem, getItem, getItems, deleteItems, updateItems } from "../controllers/storage.js";
import { validatorGetItem } from "../validators/storage.js";

const router = express()

/**
 * Get All Storages
 * @openapi
 * /storage:
 *      get:
 *          tags:
 *              - storage
 *          summary: "Listar Items"
 *          description: "Obten la lista de los archivos"
 *          security:
 *              - bearerAuth: []
 *          responses: 
 *                  "200":
 *                      description: "Retorna la lista de archivos"
 *                      content: 
 *                      application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              $ref: "#/components/schemas/storage"
 *                  "422":
 *                      description: Error de validacion.
 */

router.get("/", getItems)

/**
 * Get Detail from Storage
 * @openapi
 * /storage/{id}:
 *      get:
 *          tags:
 *              - storage
 *          summary: "Detalle Storage"
 *          description: "Obten el detalle del Storage"
 *          security:
 *              - bearerAuth: []
 *          parameters: 
 *          - name: id
 *            in: path
 *            description: ID de storage a retornar
 *            required: true
 *            schema:
 *              type: string
 *          responses: 
 *                  "200":
 *                      description: "ID de Storage a retornar"
 *                      content: 
 *                      application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/storage"
 *                  "422":
 *                      description: Error de validacion.
 */

router.get("/:id", validatorGetItem ,getItem)

/**
 * Upload File
 * @openapi
 * /storage:
 *      post:
 *          tags:
 *              - Storage
 *          summary: "Upload file"
 *          description: "Subir un archivo"
 *          security:
 *              - bearerAuth: []
 *          requestBody:
 *              content: 
 *                  multipart/form-data:
 *                      schema:
 *                          type: object
 *                          properties: 
 *                             myfile:
 *                               type: string
 *                               format: binary
 *          responses: 
 *                  "201":
 *                      description: "Retorna el objeto insertado en la colección"
 *                  "403": 
 *                      description: "Error por validación de usuario"
 */

router.post("/", uploadMiddleware.single("myfile") ,createItem);


router.delete("/:id", validatorGetItem, deleteItems)


export default router