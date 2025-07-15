import { useLocation } from "react-router-dom";
import RecipeCard from "./RecipeCard";
import LoadingRecipe from "./LoadingRecipes";
import "./AllRecipes.css";

function ShowAllRecipies({ listOfRecipe = [] }) {
  const location = useLocation(); // ✅ This was missing
  const recipes =
    listOfRecipe.length > 0 ? listOfRecipe : location.state?.recipes || [];

  return (
    <div className="AllRecipies">
      {recipes.length === 0 ? (
        <>
          <LoadingRecipe />
          <LoadingRecipe />
          <LoadingRecipe />
          <LoadingRecipe />
          <LoadingRecipe />
          <LoadingRecipe />
        </>
      ) : (
        <>
          {recipes.map((val, idx) => (
            <div className="recipe" key={idx}>
              <RecipeCard recipe={val} />
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default ShowAllRecipies;
