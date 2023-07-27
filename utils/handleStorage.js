import multer from "multer";
import { __dirname } from "../utils/utils.js";

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        const pathStorage = `${__dirname}/../storage`;
        cb(null, pathStorage) 
    },
    filename: function(req, file, cb) {
        const ext = file.originalname.split(".").pop();
        const filename = `file-${Date.now()}.${ext}`;
        cb(null, filename)
    }
});

const uploadMiddleware = multer({storage})

export default uploadMiddleware