import { matchedData } from "express-validator";
import {Tracks} from "../models/index.js";
import { handleHttpError } from "../utils/handleError.js";
import findAllDB from "./handlers/tracks-handlers.js";

const getItems = async (req,res) => {
    try {
        const user = req.user
        const data = await Tracks.findAllData({})
    
        res.status(200).send({data, user})

    }catch(e) {
        handleHttpError(res, "ERROR_GET_ITEMS")
        console.log(e)
    }

};

const getItem = async(req,res) => {
   try{
    req = matchedData(req);
    const {id} = req
    const data = await Tracks.findOneData(id);
    res.status(200).send({data})
   }catch(e){
    handleHttpError(res, "ERROR_GET_ITEM")
    console.log(e)
   }

};


const createItem = async (req,res) => {
    try {
      const data = req.body
      //const {body} = req
      const newTrack = await Tracks.create(data)
      res.status(201).send({newTrack: newTrack})
    }catch(e) { 
        handleHttpError(res, "ERROR_CREATE_ITEMS")
    }
};


const updateItems = async(req,res) => {
    try {
        const {id, ...body} = matchedData(req);
        const data = await Tracks.findByIdAndUpdate(id, body, {new: true})
        console.log(data)
        res.status(201).send({data})
      }catch(e) { 
          handleHttpError(res, "ERROR_UPDATE_ITEMS")
      }
};


const deleteItems = async (req,res) => {
    try{
        req = matchedData(req);
        const {id} = req
        const data = await Tracks.delete({_id: id});
        res.status(200).send({data})
       }catch(e){
        handleHttpError(res, "ERROR_DELETE_ITEM")
       }
    
};

export {getItems, getItem, createItem, updateItems, deleteItems}