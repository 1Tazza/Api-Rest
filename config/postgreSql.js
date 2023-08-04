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
       await sequelize.authenticate();
       console.log("POSTGRESQL Conexión correcta")
    }catch(e){
        console.log("POSTGRESQL_ERROR")
    }

}

export {dbConnectPostgre}