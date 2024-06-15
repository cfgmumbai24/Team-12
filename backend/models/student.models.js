import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true },
    email : String,
    password: String,
    phoneNumber : String,
    course: { type: mongoose.Schema.ObjectId, ref: "Course" },
    course_progress: { type: Number }, // video watched
    test_progress: { type: Number }, // test taken
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
    isVerified: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Student = mongoose.model("students", StudentSchema);



