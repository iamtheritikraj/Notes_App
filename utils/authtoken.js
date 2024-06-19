import jwt from "jsonwebtoken";

export const authtoken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: "2d",
  });

  const expiration_Date = new Date(Date.now() + 48 * 3600000); // 2 days

  res.cookie("token", token, {
    httpOnly: true,
    expires: expiration_Date,
    sameSite:'strict'
  });

  return token;
};
