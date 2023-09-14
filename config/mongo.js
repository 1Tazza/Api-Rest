import mongoose from "mongoose"

const NODE_ENV = process.env.NODE_ENV

export default async function dbConnect() {
    try{
    const DB_URI = (NODE_ENV === "test") ? process.env.DB_URI_TEST : process.env.DB_URI;
    await mongoose.connect(DB_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
       console.log("**** CONEXIÓN CORRECTA MONGODB ****")
    }
    catch(error) {console.log("**** ERROR DE CONEXIÓN ****")} 
}

