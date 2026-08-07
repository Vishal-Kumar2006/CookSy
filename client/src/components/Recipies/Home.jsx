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
  return (
    <div className="Home">
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
