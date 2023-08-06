import dotenv from "dotenv"
import {Sequelize} from "sequelize"
dotenv.config()

const database = process.env.POSTGRESQL_DATABASE
const username = process.env.POSTGRESQL_USER
const password = process.env.POSTGRESQL_PASSWORD
const host = process.env.POSTGRESQL_HOST

const sequelize = new Sequelize(
    database,
    username,
    password,
    {
      host,
      dialect: "postgres"
    }
)


const dbConnectPostgre = async () => {
    try{
        console.log(password)
       await sequelize.authenticate();
       console.log("POSTGRESQL Conexión correcta")
    }catch(e){
        console.log("POSTGRESQL ERROR DE CONEXIÓN", e)
    }

}

export {sequelize, dbConnectPostgre}