const express = require('express');
const router = express.Router();

const  { getAllRecipes, createNewRecipe, getRecipeById} = require("../Controller/recipes");


// GET all recipes
router.get('/', getAllRecipes);

// Get Recipe By Id
router.get("/:id", getRecipeById);

// POST -> create a new recipe
router.post('/new', createNewRecipe);

// Get Recipe By Id
// router.get("/fast-food", getFastFood);

module.exports = router;