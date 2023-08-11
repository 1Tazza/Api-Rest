import mongoose from "mongoose"
import mongooseDelete from "mongoose-delete"
const {Schema, model} = mongoose

const trackSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    album: {
        type: String
    },
    cover: {
        type: String,
        validate: {
            validator: (req) => {
                return true
            },
            message: "ERROR_URL"
        }
    },
    artist: {
        name: {
            type: String,
            required: true
        },
        nickname: {
            type: String,
            required: true
        },
        nationality: {
            type: String
        }
    },
    duration: {
        start: {
            type: Number
        },
        end: {
            type: Number
        }
    },
    mediaId: {
        type: mongoose.Types.ObjectId
    }
},{
    timestamps: true,
    versionKey: false
})

/**
 * Implementar metodo propio con relacion a storage 
 */
trackSchema.statics.findAllData = function() {
    const joinData = this.aggregate([
        {
            $lookup: {
                from: "storages",
                localField: "mediaId",
                foreignField: "_id",
                as: "audio"
            }
        },
        {
            $unwind: "$audio"
        }
    ]);
    return joinData
  };

trackSchema.statics.findOneData = function(id) {
    const joinData = this.aggregate([
        {
            $match: {
                _id: new mongoose.Types.ObjectId(id)
            }
        },
        {
            $lookup: {
                from: "storages",
                localField: "mediaId",
                foreignField: "_id",
                as: "audio"
            }
        },
        {
            $unwind: "$audio"
        }
    ]);
    return joinData
};  

trackSchema.plugin(mongooseDelete, {overrideMethods: "all"})

const Tracks = model("Tracks", trackSchema);

export default Tracks