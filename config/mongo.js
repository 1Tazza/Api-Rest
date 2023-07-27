import mongoose from "mongoose"

export default async function dbConnect() {
    try{
    const DB_URI = process.env.DB_URI
    await mongoose.connect(DB_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
       console.log("**** CONEXIÓN CORRECTA ****")
    }
    catch(error) {console.log("**** ERROR DE CONEXIÓN ****")} 
}

