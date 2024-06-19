import jwt from "jsonwebtoken";

export const authstatus = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    req.isAuthenticated = false;
    return next();
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      console.error("Token verification error:", err);
      req.isAuthenticated = false;
      return next();
    }

    req.isAuthenticated = true;
    req.user = decoded;
    next();
  });
};
