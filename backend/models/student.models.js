import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true },
    email : String,
    password: String,
    number : String,
    course: { type: mongoose.Schema.ObjectId, ref: "Course" },
    course_progress: { type: Number }, // video watched
    mentor: { type: mongoose.Schema.ObjectId, ref: "Mentor" },
    tags: [String],
    class : {
      type: String,
      enum: {
        values: ["11th", "12th","ug","pg","global"],
      },
    },
    uniStatus : [{
        uniName : String,
        AppStatus : {
            type : String,
            enum : {
                values : ['Accepted','Pending','Rejected']
            }
        },
        scholarship : Boolean
    }],
  },
  { timestamps: true }
);

export const Student = mongoose.model("students", StudentSchema);



