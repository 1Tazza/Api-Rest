import { Storages } from "../models/index.js";
import { handleHttpError } from "../utils/handleError.js";
import fs from "fs"
import { __dirname } from "../utils/utils.js";
import { matchedData } from "express-validator";

const PUBLIC_URL = process.env.PUBLIC_URL
const MEDIA_PATH = `${__dirname}/../storage`

const getItems = async (req,res) => {
  try{
    const data = await Storages.findAll({});
    res.send({data})
  }catch(e){
    handleHttpError(res, "ERROR_GET_ITEMS")
  }
   
};

const getItem = async(req,res) => {
  try{
    req = matchedData(req);
    const {id} = req
    const data = await Storages.findById(id);
    res.status(200).send({data})
   }catch(e){
    handleHttpError(res, "ERROR_DETAIL_ITEM")
    console.log(e)
   }
};


const createItem = async (req,res) => {
   try{
    const {body, file} = req

    const fileData = {
      filename: file.filename,
      url: `${PUBLIC_URL}/${file.filename}`
    }
    const data = await Storages.create(fileData)
    res.status(201).send({data})
   }catch(e){
    handleHttpError(res, "ERROR_CREATE_ITEM")
   }
      
};


const updateItems = async(req,res) => {
    try {
        const {id, ...body} = matchedData(req);
        const data = await Storages.findByIdAndUpdate(id, body, {new: true})
        res.status(201).send({data})
      }catch(e) { 
          handleHttpError(res, "ERROR_UPDATE_ITEMS")
      }
};


const deleteItems = async(req,res) => {
  try{
    req = matchedData(req);
    const {id} = req
    //esto elimina la imagen
    const dataFile = await Storages.findById(id);
    await Storages.delete({_id: id})
    const filePath = `${MEDIA_PATH}/${dataFile.filename}`
    /* fs.unlinkSync(filePath) */
    const data = {
      filePath, deleted: 1
    }   

    res.status(200).send({data})
   }catch(e){
    handleHttpError(res, "ERROR_DELETE_ITEM")
   }
};

export {getItems, getItem, createItem,updateItems, deleteItems}