const express = require("express");
const router = express.Router();

const verifyAccessToken = require("../context/middlewares.js");

const {
  signUpController,
  loginController,
  getProfileController,
  logoutController,
} = require("../Controller/user.js");

router.post("/sign-up", signUpController);
router.post("/log-in", loginController);

// Profile and Logout will add tomorow
router.get("/profile", verifyAccessToken, getProfileController);

router.get("/logout", verifyAccessToken, logoutController);

module.exports = router;
