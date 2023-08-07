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




/* const sequelize = new Sequelize(`postgres://${username}:${password}@localhost:${host}/apiRest`, {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }) */