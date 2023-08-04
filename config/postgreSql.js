import {Sequelize} from "sequelize"

const sequelize = new Sequelize(
    database,
    username,
    password,
    {
      host,
      dialect: "postgresql"
    }
)


const dbConnectPostgre = async () => {
    try{

    }catch(e){
        console.log("POSTGRESQL ERROR")
    }

}