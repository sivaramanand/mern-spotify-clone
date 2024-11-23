import jwt from "jsonwebtoken";

const generateToken = (id, res) => {
  const token = jwt.sign({ id }, "T/3v/p+DhBOZ1AgBBbcDdqa6WAPgVx9pYkVQAS4e+14=", {
    expiresIn: "15d",
  });

  res.cookie("token", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
  });
};

export default generateToken;
