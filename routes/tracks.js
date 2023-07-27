import express from "express"
import { getItems, getItem, createItem } from "../controllers/tracks.js";
const router = express.Router();


router.get("/", getItems);

router.post("/", createItem)

export default router