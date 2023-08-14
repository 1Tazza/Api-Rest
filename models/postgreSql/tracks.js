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
        type: DataTypes.INTEGER
     }
    },
    {
      timestamps: true
    }
)

Tracks.belongsTo(Storages, {
   foreignKey: "mediaId",
   as: "audio"
})

/**
 * implementando modelo personalizado
 */
Tracks.findAllData = function() {
   return Tracks.findAll({include: "audio"})
}



Tracks.findOneData = function(id) {
   return Tracks.findOne({where: {id}, include: "audio"})
}

export default Tracks