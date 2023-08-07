import {sequelize} from "../../config/postgreSql.js"
import { DataTypes } from "sequelize"

const Users = sequelize.define(
    "users",
    {
     name: {
        type: DataTypes.STRING,
        allowNull: false
     },
     age: {
        type: DataTypes.INTEGER
     },
     email: {
        type: DataTypes.STRING
     },
     password: {
        type: DataTypes.STRING
     },
     role: {
        type: DataTypes.ENUM("user", "admin"),
        defaultValue: "user"
     }

    },
    {
        timestamps: true
    }
)

export default Users