const Recipe = require("../Schema/recipes.js");

const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find(); // Fetch all recipes
    res.status(200).json(recipes);
  } catch (error) {
    console.error("Error fetching recipes:", error);
    res.status(500).json({ error: "Failed to retrieve recipes" });
  }
};

const createNewRecipe = async (req, res) => {
  try {
    const newRecipe = new Recipe(req.body);

    // Save the new recipe
    const saved = await newRecipe.save();

    console.log(`New Saved Recepie: ${saved}`);

    res.status(201).json(saved);
  } catch (error) {
    console.error("Error saving recipe:", error);
    res.status(500).json({ error: "Failed to save recipe" });
  }
};

const searchRecipe = async (req, res) => {
  const { recipe = "" } = req.query;
  const limit = 12;

  if (page < 1) {
    return res.status(400).json({ message: "Invalid page number" });
  }
  try {
    const recipes = await Recipe.find({
      name: {
        $regex: recipe,
        $options: "i",
      },
    }).sort({ createdAt: -1 });

    res.status(200).json(recipes);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getRecipeById = async (req, res) => {
  const id = req.params.id;

  try {
    const recipe = await Recipe.findById(id);

    if (!recipe) res.status(404).json({ message: "Recipe Not Found." });
    res.status(200).json(recipe);
  } catch (err) {
    console.log("Error Feching Recipe:", err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateRecipe = async (req, res) => {
  const id = req.params;
  console.log(id);
  console.log(req.body);
};

const deleteRecipeById = async (req, res) => {
  try {
    const id = req.params.id;
    // console.log( Recipe.findById(id))

    const recipe = await Recipe.findByIdAndDelete(id);
    if (!recipe) res.status(404).json({ message: "Recipe Not Found." });

    res.status(200).json({ message: "Recipe Deleted SucessFully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  getAllRecipes,
  createNewRecipe,
  searchRecipe,
  getRecipeById,
  updateRecipe,
  deleteRecipeById,
};
