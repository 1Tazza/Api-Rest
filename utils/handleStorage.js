import multer from "multer";

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        const pathStorage = `C:/Users/Matias/Desktop/Cursos en curso/Udemy - Curso Api Rest/utils/../storage`;
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