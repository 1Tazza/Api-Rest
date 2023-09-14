import dotenv from "dotenv"
import {Sequelize} from "sequelize"
dotenv.config()

const NODE_ENV = process.env.NODE_ENV

const database = (NODE_ENV === "test") ? process.env.POSTGRESQL_DATABASE_TEST : process.env.POSTGRESQL_DATABASE;
const username = process.env.POSTGRESQL_USER
const password = process.env.POSTGRESQL_PASSWORD
const host = process.env.POSTGRESQL_HOST

const sequelize = new Sequelize(
    database,
    username,
    password,
    {
        host,
        dialect: "postgres",
        logging: false
    }
)

const dbConnectPostgre = async () => {
    try{
       await sequelize.authenticate();
       await sequelize.sync();
       console.log("POSTGRESQL Conexión correcta")
    }catch(e){
        console.log("POSTGRESQL ERROR DE CONEXIÓN", e)
    }

}

export {sequelize, dbConnectPostgre}