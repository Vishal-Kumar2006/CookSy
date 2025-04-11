const User = require("../Schema/user");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../utils/generateTokens");
const bcrypt = require("bcrypt");

const signUpController = async (req, res) => {
  try {
    const { name, image, email, password } = req.body;

    if(await User.findOne({ email: email })) res.status(409).json({message:"User already Exist with this Email."})

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, image, email, password: hashedPassword });
    const savedUser = await user.save();
    console.log(savedUser);

    const accessToken = generateAccessToken(savedUser);
    const refreshToken = generateRefreshToken(savedUser);

    // Set cookies
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 15 * 60 * 1000,
    });


    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(201).json({ message: "User created and logged in" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const currUser = await User.findOne({ email: email });

    if (!currUser)  res.status(404).json({ message: "User not Exist with this email !"});

    console.log(currUser);

    // ✅ Compare password
    const isPasswordCorrect = await bcrypt.compare(password, currUser.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const accessToken = generateAccessToken(currUser);
    const refreshToken = generateRefreshToken(currUser);

    // Set cookies
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 15 * 60 * 1000,
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(201).json({ message: "User logged in sucessfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

// Profile and Logout will add tomorow
const getProfileController = async (req, res) => {
  try {
    // Assuming `req.user` is set by an auth middleware after verifying the access token
    const userId = req.user.id;

    const user = await User.findById(userId).select("-password"); // exclude password
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ user });
  } catch (err) {
    console.error("Error fetching user profile:", err);
    res.status(500).json({ error: err.message });
  }
};

const logoutController = (req, res) => {
  try {
    res.clearCookie("accessToken", {
      httpOnly: true,
      sameSite: "Strict",
      secure: process.env.NODE_ENV === "production",
    });

    res.clearCookie("refreshToken", {
      httpOnly: true,
      sameSite: "Strict",
      secure: process.env.NODE_ENV === "production",
    });

    res.status(200).json({ message: "User logged out successfully" });
  } catch (err) {
    console.error("Logout error:", err);
    res.status(500).json({ error: err.message });
  }
};

const jwt = require("jsonwebtoken");




module.exports = { signUpController, loginController };
