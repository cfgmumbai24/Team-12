import mongoose from 'mongoose'

const TestSchema = new mongoose.Schema({
    test_id : Number,
    total : Number,
    course_id : {type : mongoose.Schema.ObjectId , ref: 'Course'},
    student_scores : [{
        student_id : {type : mongoose.Schema.ObjectId , ref : "Student"},
        student_mark : Number
    }]
},{timestamps:true})


export const Test = mongoose.model("test",TestSchema);