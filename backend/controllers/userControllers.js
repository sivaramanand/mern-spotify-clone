import User from "../models/User.js";
import bcrypt from "bcrypt";
import generateToken from "../utils/generateToken.js";
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "user already exists" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    user = await User.create({
      name,
      email,
      password: hashPassword,
    });

    generateToken(user._id, res);

    res.status(201).json({
      user,
      message: "User Registered",
    });
  } catch (err) {
    res
      .status(500)
      .json({ error: `problem in registeruser controller ${err}` });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "No user exists",
      });
    }

    const comparepassword = await bcrypt.compare(password, user.password);
    if (!comparepassword) {
      return res.status(400).json({
        message: "wriong password",
      });
    }

    generateToken(user._id, res);
    res.status(200).json({
      user,
      message: "user successfully logged in",
    });
  } catch (err) {
    res.status(500).json({ error: `problem in loginUser controller ${err}` });
  }
};

export const myProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: `problem in myProfile controller ${err}` });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("token", "", { maxAge: 0 });
    res.json({
      message: "logged out successfully",
    });
  } catch (err) {
    res.status(500).json({ error: `problem in logout controller ${err}` });
  }
};
