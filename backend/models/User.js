import mongoose from "mongoose";

const userschema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: "user" },
    playlist: [{ type: String, required: true }],
  },
  { timeStamps: true }
);

export const User = mongoose.model("User", userschema);
export default User;
