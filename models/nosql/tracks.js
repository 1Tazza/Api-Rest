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
        }
    ]);
    return joinData
  };

trackSchema.plugin(mongooseDelete, {overrideMethods: "all"})

const Tracks = model("Tracks", trackSchema);

export default Tracks