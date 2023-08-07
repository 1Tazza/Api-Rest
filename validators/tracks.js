import { check } from "express-validator";
import { validateResults } from "../utils/handleValidator.js";

const validatorCreateItem = [
    check("name").exists().notEmpty(),
    check("album").exists().notEmpty(),
    check("cover").exists().notEmpty(),
    check("mediaId").exists().notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];

const validatorGetItem = [
    check("id").exists().notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];

export {validatorCreateItem, validatorGetItem}