import "./Home.css";
import { useRef } from "react";
import SlidingBlocks from "./SlidingBlock";
import MealType from "./MealType";
import FoodType from "./FoodType";
import CookingMethod from "./CookingMethod";
import CookingTime from "./CookingTime";
import CostRecepies from "./CostRecipes";

const Home = () => {
  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollLeft -= 400;
  };

  const scrollRight = () => {
    scrollRef.current.scrollLeft += 400;
  };

  return (
    <div className="Home">
      <div className="Recipe-search-home">
        <input type="text" placeholder="Search a Recipe" />
        <button>Search</button>
      </div>

      <MealType/>
      <FoodType/>
      <CookingMethod/>
      <CostRecepies/>
      <CookingTime/>
    </div>
  );
};

export default Home;
