import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/recipes/${id}`);
        setRecipe(response.data);
      } catch (error) {
        console.error("Error fetching recipe:", error.message);
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) return <p>Loading recipe details...</p>;

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{recipe.name}</h2>
      <img src={recipe.image} alt="Recipe" style={styles.image} />
      <p><strong>Category:</strong> {recipe.category}</p>
      <p><strong>Cost:</strong> ₹{recipe.cost}</p>
      <p><strong>Instructions:</strong> {recipe.instructions}</p>
      <div>
        <strong>Ingredients:</strong>
        <ul>
          {recipe.ingredients.map((ing, idx) => (
            <li key={idx}>{ing}</li>
          ))}
        </ul>
      </div>
      <p style={styles.createdAt}>Posted on: {new Date(recipe.createdAt).toLocaleDateString()}</p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "2rem auto",
    padding: "1.5rem",
    border: "1px solid #ccc",
    borderRadius: "12px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
    fontFamily: "sans-serif",
  },
  title: {
    textAlign: "center",
    fontSize: "2rem",
    marginBottom: "1rem",
  },
  image: {
    width: "100%",
    height: "15rem",
    objectFit: "cover",
    borderRadius: "10px",
    marginBottom: "1rem",
  },
  createdAt: {
    fontStyle: "italic",
    color: "#555",
    marginTop: "1rem",
  },
};

export default RecipeDetails;
