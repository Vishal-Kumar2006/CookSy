const routes = require("express").Router();
const Recipies = require("../Schema/recipes.js");

routes.get("/mealType", async (req, res) => {
  const mealType = req.query.filterType;
  const recipes = await Recipies.find({ mealType });
  res.status(200).json(recipes);
});

routes.get("/foodType", async (req, res) => {
  const foodType = req.query.filterType;
  const recipes = await Recipies.find({ foodType });
  res.status(200).json(recipes);
});

routes.get("/cookingMethod", async (req, res) => {
  const cookingMethod = req.query.filterType;
  const recipes = await Recipies.find({ cookingMethod });
  res.status(200).json(recipes);
});

routes.get("/cost", async (req, res) => {
  const cost = req.query.filterType;
  const recipes = await Recipies.find({ cost });
  res.status(200).json(recipes);
});

routes.get("/cookingTime", async (req, res) => {
  const cookingTime = req.query.filterType;
  const recipes = await Recipies.find({ cookingTime });
  res.status(200).json(recipes);
});

module.exports = routes;
