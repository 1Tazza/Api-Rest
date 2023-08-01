import express from "express"
import { getItems, getItem, createItem, updateItems, deleteItems } from "../controllers/tracks.js";
import { validatorCreateItem, validatorGetItem } from "../validators/tracks.js";
import { customHeader } from "../middlewares/customHeader.js";
import { authMiddleware } from "../middlewares/session.js";
import checkRol from "../middlewares/rol.js";

const router = express.Router();


router.get("/", authMiddleware, getItems);

router.get("/:id", authMiddleware, validatorGetItem, getItem)

router.post("/", authMiddleware, checkRol(["admin"]), validatorCreateItem, createItem)

router.put("/:id", authMiddleware, validatorGetItem, validatorCreateItem, updateItems)

router.delete("/:id", authMiddleware, validatorGetItem, deleteItems)

export default router