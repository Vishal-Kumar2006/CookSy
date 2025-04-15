import { useState } from "react";
import axios from "axios";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import "./RecipeForm.css";

const CLOUDINARY_CLOUD_NAME = "dhj0i3rr1";
const CLOUDINARY_UPLOAD_PRESET = "SAHK-Project";
const CLOUDINARY_FOLDER = "SAHK";
const animatedComponents = makeAnimated();

const RecipeForm = () => {
  const meals = ["Breakfast", "Lunch", "Dinner", "Brunch", "Snacks", "Dessert"];
  const foodTypes = [
    "Vegetarian",
    "Non-Vegetarian",
    "Vegan",
    "Gluten-Free",
    "Keto",
    "Diabetic-Friendly",
    "Paleo",
    "High-Protein",
    "Low-Carb",
  ];
  const cookingMethods = [
    "Fried",
    "Baked",
    "Grilled",
    "Steamed",
    "Boiled",
    "Raw",
  ];
  const cookingTimes = [
    { label: "Under 10 minutes", value: 5 },
    { label: "10 minutes", value: 10 },
    { label: "20 minutes", value: 20 },
    { label: "30 minutes", value: 30 },
    { label: "60 minutes", value: 60 },
    { label: "More than 2 hours", value: 120 },
  ];
  const ingredientOptions = [
    "Salt",
    "Sugar",
    "Oil",
    "Flour",
    "Rice",
    "Milk",
    "Tomato",
    "Onion",
    "Garlic",
    "Chicken",
    "Butter",
  ].map((item) => ({ value: item, label: item }));

  const [recipeData, setRecipeData] = useState({
    name: "",
    instructions: "",
    image: "",
    ingredients: [],
    mealType: "Breakfast",
    foodType: "Vegetarian",
    cookingMethod: "Fried",
    cookingTime: 5,
    cost: 0,
  });

  const handleChange = async (e) => {
    const { name, value, type, checked, files } = e.target;

    if (name === "image" && files.length > 0) {
      const formData = new FormData();
      formData.append("file", files[0]);
      formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
      formData.append("folder", CLOUDINARY_FOLDER);
      try {
        const res = await axios.post(
          `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
          formData
        );
        setRecipeData((prev) => ({ ...prev, image: res.data.secure_url }));
      } catch (err) {
        console.error("Image upload failed", err);
      }
    } else {
      setRecipeData((prev) => ({
        ...prev,
        [name]:
          type === "checkbox"
            ? checked
            : name === "cost" || name === "cookingTime"
            ? Number(value)
            : value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(recipeData);
    try {
      await axios.post("http://localhost:5000/recipes/new", recipeData);
      alert("Recipe created successfully!");
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return (
    <div className="RecipeForm">
      <h3>Create a New Recipe</h3>
      <form onSubmit={handleSubmit}>
        <label>Recipe Name</label>
        <input
          name="name"
          onChange={handleChange}
          value={recipeData.name}
          className="recipe-input"
        />

        <label>Recipe Process</label>
        <textarea
          id="recipe-description"
          name="instructions"
          onChange={handleChange}
          value={recipeData.instructions}
          className="recipe-input"
        />

        <label>Recipe Image</label>
        <input
          type="file"
          name="image"
          multiple
          onChange={handleChange}
          className="recipe-input"
        />

        <label>Recipe Ingredients</label>
        <Select
          className="recipe-input"
          id="recipe-ingredients"
          isMulti
          closeMenuOnSelect={false}
          components={animatedComponents}
          options={ingredientOptions}
          value={ingredientOptions.filter((opt) =>
            recipeData.ingredients.includes(opt.value)
          )}
          onChange={(selected) =>
            setRecipeData((prev) => ({
              ...prev,
              ingredients: selected.map((opt) => opt.value),
            }))
          }
        />

        <label>Cost (per plate)</label>
        <input
          type="number"
          name="cost"
          onChange={handleChange}
          value={recipeData.cost}
          className="recipe-input"
        />

        <div className="recipe-dropdown">
          <div className="single-dropdown">
            <label>Meal Type</label>
            <select
              name="mealType"
              className="recipe-input"
              onChange={handleChange}
              value={recipeData.mealType}
            >
              {meals.map((meal) => (
                <option key={meal} value={meal}>
                  {" "}
                  {meal}{" "}
                </option>
              ))}
            </select>
          </div>
          <div className="single-dropdown">
            <label>Food Type</label>
            <select
              name="foodType"
              className="recipe-input"
              onChange={handleChange}
              value={recipeData.foodType}
            >
              {foodTypes.map((type) => (
                <option key={type} value={type}>
                  {" "}
                  {type}{" "}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="recipe-dropdown">
          <div className="single-dropdown">
            <label>Cooking Method</label>
            <select
              name="cookingMethod"
              className="recipe-input"
              onChange={handleChange}
              value={recipeData.cookingMethod}
            >
              {cookingMethods.map((method) => (
                <option key={method} value={method}>
                  {" "}
                  {method}{" "}
                </option>
              ))}
            </select>
          </div>

          <div className="single-dropdown">

          <label>Cooking Time</label>
          <select
            name="cookingTime"
            className="recipe-input"
            onChange={handleChange}
            value={recipeData.cookingTime}
          >
            {cookingTimes.map((time) => (
              <option key={time.value} value={time.value}>
                {" "}
                {time.label}{" "}
              </option>
            ))}
          </select>
          </div>
        </div>

        <button className="form-button" type="submit">Create Recipe</button>
      </form>
    </div>
  );
};

export default RecipeForm;
