const express = require('express');
const router = express.Router();

const {signUpController, loginController} = require("../Controller/user");


router.post("/sign-up", signUpController);
router.post("/log-in", loginController);

// Profile and Logout will add tomorow



module.exports = router;