const express = require("express");
const router = express.Router();

const {
  getAllRecipes,
  createNewRecipe,
  getRecipeById,
  updateRecipe,
  deleteRecipeById,
} = require("../Controller/recipes.js");

// GET all recipes
router.get("/", getAllRecipes);

// POST -> create a new recipe
router.post("/new", createNewRecipe);

router.get("/:id", getRecipeById);

router.delete("/:id/delete", deleteRecipeById);

router.get("/:id/update", updateRecipe);

module.exports = router;
