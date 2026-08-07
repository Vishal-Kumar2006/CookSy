import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../config/api.js";
import "./AllRecipes.css";
import ShowAllRecipies from "./ShowAllRecipe.jsx";
import Reveal from "../../Reveal.jsx";

const AllRecipes = ({ recipe }) => {
  const [listOfRecipe, setListOfRecipe] = useState([]);
  const [recipeName, setRecipeName] = useState("");

  useEffect(() => {
    axios
      .get(`${API_URL}/recipes`)
      .then((response) => {
        setListOfRecipe(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .get(`${API_URL}/recipes/search-recipe?recipe=${recipeName}`)
      .then((response) => {
        setListOfRecipe(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <Reveal>
        <div className="Recipe-search-home">
          <input
            type="text"
            placeholder="Search a Recipe"
            value={recipeName}
            onChange={(e) => setRecipeName(e.target.value)}
          />
          <button onClick={handleSubmit}>Search</button>
        </div>
      </Reveal>
      <ShowAllRecipies listOfRecipe={listOfRecipe} />
    </>
  );
};

export default AllRecipes;
