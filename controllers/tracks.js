import {Tracks} from "../models/index.js";


/**
 * Obtener lista de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req,res) => {
 
    try {

    }catch(e) {
        
    }

    const data = await Tracks.find({});

    res.status(200).send({data})
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
      const {body} = req
      const newTrack = await Tracks.create(body)
      res.status(201).send({newTrack: newTrack})
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