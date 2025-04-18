import "./LoadingRecipes.css";

const LoadingRecipe = () => {
  return (
    <div className="Loding-Recipes">
      <img
        className="Recipe-Loading-Image"
        src="https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
        alt=""
      />
      <div className="Recipe-Deatails">
        <h3 className="Recipe-Name">&nbsp; </h3>
        <p className="Recipe-Desription"></p>
      </div>
    </div>
  );
};

export default LoadingRecipe;