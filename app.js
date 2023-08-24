import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import dbConnect from "./config/mongo.js"
import routes from "./routes/index.js"
import swaggerUi from "swagger-ui-express"
import { dbConnectPostgre } from "./config/postgreSql.js"
import { openApiConfig } from "./docs/swagger.js"
dotenv.config()

const ENGINE_DB = process.env.ENGINE_DB
const NODE_ENV = process.env.NODE_ENV || "development"

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static("storage"))

const port = process.env.PORT || 3000

app.use("/documentation", swaggerUi.serve, swaggerUi.setup(openApiConfig))

app.use("/", routes)

if(NODE_ENV !== "test") {
    app.listen(port);
}

(ENGINE_DB === "nosql") ? dbConnect() : dbConnectPostgre()

export default app