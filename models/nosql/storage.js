import mongoose from "mongoose"
import mongooseDelete from "mongoose-delete";
const {Schema, model} = mongoose

const storageSchema = new Schema({
    url: {
        type: String,
        required: true
    },
    filename: {
        type: String
    }
},{
    timestamps: true,
    versionKey: false
})

storageSchema.plugin(mongooseDelete, {overrideMethods: "all"})

const Storages = model("Storages", storageSchema);

export default Storages