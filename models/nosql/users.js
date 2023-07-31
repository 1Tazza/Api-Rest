import mongoose from "mongoose"
import mongooseDelete from "mongoose-delete"
const {Schema, model} = mongoose

const userSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    email: {
        type: String,
        unique:true,
        required: true
    },
    password: {
        type: String,
        select: false
    },
    role: {
        type:["user","admin"],
        default: "user"
    }
},{
    timestamps: true,
    versionKey: false
})

userSchema.plugin(mongooseDelete, {overrideMethods: "all"})

const Users = model("Users", userSchema);

export default Users