const express = require('express');
const router = express.Router();

const  { getAllRecipes, createNewRecipe, getRecipeById} = require("../Controller/recipes");


// GET all recipes
router.get('/', getAllRecipes);

// Get Recipe By Id
router.get("/:id", getRecipeById);

// POST -> create a new recipe
router.post('/new', createNewRecipe);

module.exports = router;