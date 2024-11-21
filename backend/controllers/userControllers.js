import User from "../models/User";
import bcrypt from "bcrypt";
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "user already exists" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ error: `problem in registeruser controller ${err}` });
  }
};
