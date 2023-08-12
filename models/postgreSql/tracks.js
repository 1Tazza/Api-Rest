import {sequelize} from "../../config/postgreSql.js"
import { DataTypes } from "sequelize"
import Storages from "./storage.js"

const Tracks = sequelize.define(
    "tracks",
    {
     name: {
        type: DataTypes.STRING,
        allowNull: false
     },
     album: {
        type: DataTypes.STRING
     },
     cover: {
        type: DataTypes.STRING
     },
     artist_name: {
        type: DataTypes.STRING
     },
     artist_nickname: {
        type: DataTypes.STRING
     },
     artist_nationality: {
        type: DataTypes.STRING
     },
     duration_start: {
        type: DataTypes.INTEGER
     },
     duration_end: {
        type: DataTypes.INTEGER
     },
     mediaId: {
        type: DataTypes.STRING
     }
    },
    {
      timestamps: true
    }
)

/**
 * implementando modelo personalizado
 */

Tracks.findAllData = function() {
   Tracks.belongsTo(Storages, {
      foreignKey: "mediaId"
   })

   return Tracks.findAll({include: Storages})

}

export default Tracks