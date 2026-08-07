import "./Home.css";
import { useRef } from "react";
import SlidingBlocks from "./SlidingBlock";
import MealType from "./MealType";
import FoodType from "./FoodType";
import CookingMethod from "./CookingMethod";
import CookingTime from "./CookingTime";
import CostRecepies from "./CostRecipes";
import Reveal from "../../Reveal.jsx";
import { useState } from "react";

const Home = () => {
  const [recipe, setRecipe] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .get(`${API_URL}/recipes/search-recipe?recipe=${recipe}`)
      .then((response) => {
        setListOfRecipe(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="Home">
      <Reveal>
        <div className="Recipe-search-home">
          <input type="text" placeholder="Search a Recipe" />
          <button>Search</button>
        </div>
      </Reveal>

      <Reveal>
        <div className="home-types">
          <MealType />
        </div>
      </Reveal>

      <Reveal>
        <div className="home-types">
          <FoodType />
        </div>
      </Reveal>

      <Reveal>
        <div className="home-types">
          <CookingMethod />
        </div>
      </Reveal>

      <Reveal>
        <div className="home-types">
          <CostRecepies />
        </div>
      </Reveal>

      <Reveal>
        <div className="home-types">
          <CookingTime />
        </div>
      </Reveal>
    </div>
  );
};

export default Home;
