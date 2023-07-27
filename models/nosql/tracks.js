import mongoose from "mongoose"
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

const Tracks = model("Tracks", trackSchema);

export default Tracks