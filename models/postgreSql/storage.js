import {sequelize} from "../../config/postgreSql.js"
import { DataTypes } from "sequelize"

const Storages = sequelize.define(
    "storages",
    {
     url: {
        type: DataTypes.STRING,
        allowNull: false
     },
     filename: {
        type: DataTypes.STRING
     }   
    },
    {
        timestamps: true
    }
)

export default Storages