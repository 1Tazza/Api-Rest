import { Storages } from "../models";

/**
 * Obtener lista de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req,res) => {
    const data = await Tracks.find({});

    res.send({data})
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
      console.log("BODY",body)
      const newTrack = await Tracks.create(body)
      console.log(newTrack) 
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