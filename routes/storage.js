import express from "express";
import uploadMiddleware from "../utils/handleStorage.js";
import { createItem, getItem, getItems, deleteItems, updateItems } from "../controllers/storage.js";
import { validatorGetItem } from "../validators/storage.js";

const router = express()

router.get("/", getItems)

router.get("/:id", validatorGetItem ,getItem)

router.post("/", uploadMiddleware.single("myfile") ,createItem);


router.delete("/:id", validatorGetItem, deleteItems)


export default router