import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import dbConnect from "./config/mongo.js"
import routes from "./routes/index.js"
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const port = process.env.PORT || 3000

app.use("/", routes)

app.listen(port, () => {
    console.log(`La app esta corriendo en el puerto http://localhost:${port}`)
}) 

dbConnect()