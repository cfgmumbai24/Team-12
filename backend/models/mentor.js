import mongoose from 'mongoose'

const MentorSchema = new mongoose.Schema({
    username : {type : String,unique : true},
    password : String,
    course : {type : mongoose.Schema.ObjectId , ref : 'Course'},
    tags : [String]
},{timestamps:true})


export const Mentor = mongoose.model("mentors",MentorSchema);