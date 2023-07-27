import mongoose from "mongoose"
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
        type: String
    },
    role: {
        type:["user","admin"],
        default: "user"
    }
},{
    timestamps: true,
    versionKey: false
})

const Users = model("Users", userSchema);

export default Users