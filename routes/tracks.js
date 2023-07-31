import express from "express"
import { getItems, getItem, createItem, updateItems, deleteItems } from "../controllers/tracks.js";
import { validatorCreateItem, validatorGetItem } from "../validators/tracks.js";
import { customHeader } from "../middlewares/customHeader.js";
import { authMiddleware } from "../middlewares/session.js";

const router = express.Router();


router.get("/", authMiddleware, getItems);

router.get("/:id", validatorGetItem, getItem)

router.post("/", validatorCreateItem, createItem)

router.put("/:id", validatorGetItem, validatorCreateItem, updateItems)

router.delete("/:id", validatorGetItem, deleteItems)

export default router