import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    avatar: {
      type: String,
      required: true,
    },
    fullname: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    career: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    subscription: {
      type: String,
      required: true,
    },
    coverImg: {
      type: String,
      required: false,
    },
    about: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

//If the User collection does not exist create a new one.
export default mongoose.models.User || mongoose.model("User", userSchema);
