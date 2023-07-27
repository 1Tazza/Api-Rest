import { matchedData } from "express-validator";
import {Tracks} from "../models/index.js";
import { handleHttpError } from "../utils/handleError.js";


const getItems = async (req,res) => {
    try {
        const data = await Tracks.find({});
    
        res.status(200).send({data})

    }catch(e) {
        handleHttpError(res, "ERROR_GET_ITEMS")
    }

};

const getItem = async(req,res) => {
   try{
    req = matchedData(req);
    const {id} = req
    const data = await Tracks.findById(id);
    res.status(200).send({data})
   }catch(e){
    handleHttpError(res, "ERROR_GET_ITEM")
   }

};


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