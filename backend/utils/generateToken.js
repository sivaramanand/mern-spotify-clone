import jwt from "jsonwebtoken";

const generateToken = (id, res) => {
  const token = jwt.sign({ id }, process.env.JWT_secret, {
    expiresIn: "30d",
  });

  res.cookie("token", token, {
    maxAge: 15 * 24 * 60 * 60,
    httpOnly: true,
    sameSite: "strict",
  });
};

export default generateToken;
