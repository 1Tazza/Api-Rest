import { Storages } from "../models/index.js";

const PUBLIC_URL = process.env.PUBLIC_URL

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
      const {body, file} = req

      const fileData = {
        filename: file.filename,
        url: `${PUBLIC_URL}/${file.filename}`
      }
      const data = await Storages.create(fileData)
      res.status(201).send({data})
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