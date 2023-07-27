import express from "express"
import { getItems, getItem, createItem } from "../controllers/tracks.js";
import { validatorCreateItem } from "../validators/tracks.js";
import { customHeader } from "../middlewares/customHeader.js";

const router = express.Router();


router.get("/", getItems);

router.post("/", validatorCreateItem, customHeader, createItem)

export default router