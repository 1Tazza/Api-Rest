import mongoose from "mongoose"
const {Schema, model} = mongoose

const storageSchema = new Schema({
    url: {
        type: String,
        required: true
    },
    filename: {
        type: Number
    }
},{
    timestamps: true,
    versionKey: false
})

const Storages = model("Storages", storageSchema);

export default Storages