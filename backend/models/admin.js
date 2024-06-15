import mongoose from 'mongoose'

const AdminSchema = new mongoose.Schema({
    username: { type: String, unique: true },
    password: String,
},{timestamps:true})


export const Admin = mongoose.model("Admins",AdminSchema);