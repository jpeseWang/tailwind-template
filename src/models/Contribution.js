import mongoose from "mongoose";

const { Schema } = mongoose;

const contributionSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    sourceCode: {
      type: String,
      required: true,
    },
    imgSrc: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    datetime: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    authorCareer: {
      type: String,
    },
    authorAvatar: {
      type: String,
    },
    authorID: {
      type: String,
    },
    authorUsername: {
      type: String,
    },
    ratings: [
      {
        username: {
          type: String,
          required: true,
        },
        score: {
          type: Number,
          required: true,
          min: 0,
          max: 5,
        },
      },
      { timestamps: true },
    ],
  },
  { timestamps: true }
);

//If the Post collection does not exist create a new one.
export default mongoose.models.Contribution ||
  mongoose.model("Contribution", contributionSchema);
