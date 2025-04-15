const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const recipesRoute = require("./Routes/recipes.js");
const userRoute = require("./Routes/user.js");

const PORT = process.env.PORT || 5000;

// Allowed Json Data from Backend
app.use(express.json());

// Whitelist (allowed-access) from origin for frontend
app.use(cors({ credentials: true, origin: true }));
app.use(cookieParser()); // 🧠 this line is important

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected Successfully!"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

  
// All Routes for Recipies
app.use("/recipes", recipesRoute);

app.use("/user", userRoute);

app.listen(PORT, (req, res) => {
  console.log(`Srever is Listning at Port http://localhost:${PORT}`);
});
