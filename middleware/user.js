const { auth } = require("../db/schema");
const logInMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.access_token;
    if (!token) {
      return res.status(400).json({ message: "access Token unavalaible" });
    }
    const user = await auth.findOne({ accessToken: token });
    if (user) {
      req.user = user;
      next();
    } else {
      res.status(401).json({ message: "user not authenticated" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Invalid or expired access token" });
  }
};
module.exports = { logInMiddleware };
