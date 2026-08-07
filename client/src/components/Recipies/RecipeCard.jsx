import { useNavigate } from "react-router-dom";
import "./RecipeCard.css";
import Reveal from "../../Reveal.jsx";

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();

  const handleChange = () => {
    navigate(`/recipes/${recipe._id}`, { state: recipe });
  };

  return (
    <Reveal>
      <div className="RecipeCard" onClick={handleChange}>
        <img src={recipe.image} alt="Recipe Image" className="recipe-image" />
        <div className="recipe-info">
          <div className="recipe-info-details">
            <h3 className="recipe-name">{recipe.name}</h3>
            <p className="recipe-cost">₹{recipe.cost}</p>
          </div>
          <div className="recipe-info-sub-details">
            <p className="">{recipe.instructions}</p>

            <p>{recipe.ingredients.join(", ")}</p>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default RecipeCard;
