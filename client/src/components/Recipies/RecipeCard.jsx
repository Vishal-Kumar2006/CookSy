import {useNavigate} from "react-router-dom"
import "./RecipeCard.css";

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();
  
  const handleChange = () => {
    navigate(`/recipes/${recipe._id}`, {state:recipe});
  }

  return (
    <div className="RecipeCard">
      <img src={recipe.image} alt="Recipe Image" className="recipe-image" />
      <div className="recipe-info">
        <div className="recipe-info-details">
          <h3 className="recipe-name">{recipe.name}</h3>
          <p className="recipe-cost" >₹{recipe.cost}</p>
        </div>

          <p className="recipe-instructions">{recipe.instructions}</p>
        <button onClick={handleChange}>See Recipe in Detail</button>
      </div>
    </div>
  );
};

export default RecipeCard;
