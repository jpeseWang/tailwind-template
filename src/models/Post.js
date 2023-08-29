import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
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
      // name: {
      //   type: String,
      //   required: true,
      // },
      // role: {
      //   type: String,
      //   required: true,
      // },
      // imgSrc: {
      //   type: String,
      //   required: true,
      // },
    },
  },
  { timestamps: true }
);

//If the Post collection does not exist create a new one.
export default mongoose.models.Post || mongoose.model("Post", postSchema);
