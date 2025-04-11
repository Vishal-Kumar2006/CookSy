import ReactCard from "./RecipeCard.jsx";
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
