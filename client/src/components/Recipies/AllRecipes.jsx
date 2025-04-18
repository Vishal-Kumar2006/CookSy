import ReactCard from "./RecipeCard.jsx";
import LoadingRecipe from "./LoadingRecipes.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import "./AllRecipes.css";

const AllRecipes = () => {
  const [listOfRecipe, setListOfRecipe] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/recipes").then((response) => {
      setListOfRecipe(response.data);
    });
  }, []);

  if (listOfRecipe.length === 0) {
    return (
      <div className="AllRecipies">
        <LoadingRecipe /> 
        <LoadingRecipe /> 
        <LoadingRecipe />
        <LoadingRecipe />
        <LoadingRecipe />
        <LoadingRecipe />
      </div>
    );
  }
  return (
    <div className="AllRecipies">
      {listOfRecipe.map((val, idx) => (
        <div className="recipe" key={idx}>
          <ReactCard recipe={val} />
        </div>
      ))}
    </div>
  );
};

export default AllRecipes;
