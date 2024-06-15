import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema(
  {
    course_name: String,
    course_mentor: { type: mongoose.Schema.ObjectId, ref: "Mentor" },
    total_classes: Number,
    type: {
      type: String,
      enum: {
        values: ["ug", "pg", "global"],
      },
    },
    links: [String],
  },
  { timestamps: true }
);

export const Course = mongoose.model("courses", CourseSchema);
