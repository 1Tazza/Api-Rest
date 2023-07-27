import express from "express";
import uploadMiddleware from "../utils/handleStorage.js";
import { createItem } from "../controllers/storage.js";

const router = express()


router.post("/", uploadMiddleware.single("myfile") ,createItem)

export default router