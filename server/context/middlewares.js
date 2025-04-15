const jwt = require("jsonwebtoken");

const verifyAccessToken = (req, res, next) => {
  const token = req.cookies.accessToken;
  // refreshToken

  if (!token) {
    return res.status(401).json({ message: "Access token missing" });
  }

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = decoded; // Add user info to request
    next();
  } catch (err) {
    console.error("Token verification failed:", err);
    res.status(403).json({ message: "Invalid or expired token" });
  }
};

module.exports = verifyAccessToken;
