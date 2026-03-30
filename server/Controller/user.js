const User = require("../Schema/user");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../utils/generateTokens.js");
const bcrypt = require("bcrypt");

// 🔥 Reusable cookie config (no duplication)
const cookieOptions = {
  httpOnly: true,
  secure: true,
  sameSite: "None",
};

// SIGNUP Controller
const signUpController = async (req, res) => {
  try {
    const { name, image, email, password } = req.body;

    // Step 1: Proper validation
    if (!name || !image || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    //  Step 2: Check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    //  Step 3: Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      image,
      email,
      password: hashedPassword,
    });

    const savedUser = await user.save();

    //   Step 4: Generate tokens
    const accessToken = generateAccessToken(savedUser);
    const refreshToken = generateRefreshToken(savedUser);

    //  Step 5: Set cookies
    res.cookie("accessToken", accessToken, {
      ...cookieOptions,
      maxAge: 15 * 60 * 1000,
    });

    res.cookie("refreshToken", refreshToken, {
      ...cookieOptions,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(201).json({
      message: "User created and logged in",
      user: {
        id: savedUser._id,
        name: savedUser.name,
        email: savedUser.email,
        image: savedUser.image,
      },
    });
  } catch (err) {
    console.error("Signup Error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// Login Controller
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    //  Validation
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Tokens
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    // Cookies
    res.cookie("accessToken", accessToken, {
      ...cookieOptions,
      maxAge: 15 * 60 * 1000,
    });

    res.cookie("refreshToken", refreshToken, {
      ...cookieOptions,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        image: user.image,
      },
    });
  } catch (err) {
    console.error("Login Error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// PROFILE Controller
const getProfileController = async (req, res) => {
  try {
    // Safety check
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ user });
  } catch (err) {
    console.error("Profile Error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// Logout Controller
const logoutController = (req, res) => {
  try {
    //  Must match cookie options EXACTLY
    res.clearCookie("accessToken", cookieOptions);
    res.clearCookie("refreshToken", cookieOptions);

    return res.status(200).json({ message: "Logged out successfully" });
  } catch (err) {
    console.error("Logout Error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  signUpController,
  loginController,
  getProfileController,
  logoutController,
};
