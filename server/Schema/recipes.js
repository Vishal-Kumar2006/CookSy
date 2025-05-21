const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: {
    type: String,
    default: // Default image
      "https://static.vecteezy.com/system/resources/previews/049/654/287/non_2x/diwali-food-on-thali-plat-cartoon-colored-clipart-vector.jpg",
  }, 
  cost:{type: Number, default:500, required: true},
  ingredients: { type: Array, required: true },
  instructions: { type: Array, required: true },
  mealType: { type: String, required: true },
  foodType:  { type: String, required: true },
  cookingMethod:  { type: String, required: true },
  cookingTime:  { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Recipe", recipeSchema);
