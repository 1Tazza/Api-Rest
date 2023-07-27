import { matchedData } from "express-validator";
import {Tracks} from "../models/index.js";
import { handleHttpError } from "../utils/handleError.js";


/**
 * Obtener lista de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req,res) => {
 
    try {
        const data = await Tracks.find({});
    
        res.status(200).send({data})

    }catch(e) {
        handleHttpError(res, "ERROR_GET_ITEMS")
    }

};

/**
 * Obtener un detalle
 * @param {*} req 
 * @param {*} res 
 */
const getItem = (req,res) => {};

/**
 * actualizar un registro
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req,res) => {
    try {
      const body = matchedData(req)
      //const {body} = req
      const newTrack = await Tracks.create(body)
      res.status(201).send({newTrack: newTrack})
    }catch(e) { 
        handleHttpError(res, "ERROR_CREATE_ITEMS")
    }
};

/**
 * actualizar un registro
 * @param {*} req 
 * @param {*} res 
 */
const updateItems = (req,res) => {};

/**
 * eliminar un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItems = (req,res) => {};

export {getItems, getItem, createItem,updateItems, deleteItems}