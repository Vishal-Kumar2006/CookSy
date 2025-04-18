import SlidingBlocks from "./SlidingBlock";

const FoodType = () => {

    const foodTypesDetails = [
        {
          image: "",
          heading: "Vegetarian",
          description:
            "Plant-based meals made without meat, fish, or poultry.\nRich in fruits, vegetables, grains, legumes, and dairy products.\nIdeal for those who seek a balanced, ethical, and sustainable diet."
        },
        {
          image: "",
          heading: "Non-Vegetarian",
          description:
            "Includes a variety of dishes made with meat, poultry, or seafood.\nOffers high-quality proteins and rich flavors.\nPerfect for those who enjoy a diverse and hearty food experience."
        },
        {
          image: "",
          heading: "Vegan",
          description:
            "Completely free from animal products including dairy and eggs.\nCentered around whole grains, legumes, fruits, and vegetables.\nGreat for compassionate eating and environmental consciousness."
        },
        {
          image: "",
          heading: "Gluten-Free",
          description:
            "Carefully prepared meals without wheat, barley, or rye.\nIdeal for people with gluten intolerance or celiac disease.\nFocuses on rice, corn, quinoa, and naturally gluten-free ingredients."
        },
        {
          image: "",
          heading: "Keto",
          description:
            "A low-carb, high-fat diet designed to put your body in ketosis.\nIncludes meats, dairy, healthy oils, and leafy greens.\nGreat for weight loss and steady energy without sugar spikes."
        },
        {
          image: "",
          heading: "Diabetic-Friendly",
          description:
            "Meals designed to maintain stable blood sugar levels.\nFocuses on complex carbs, lean proteins, and low-glycemic foods.\nBalanced and tasty options for people managing diabetes."
        },
        {
          image: "",
          heading: "Paleo",
          description:
            "Inspired by the eating habits of early humans.\nAvoids processed foods, grains, and dairy.\nEmphasizes whole foods like meats, nuts, fruits, and vegetables."
        },
        {
          image: "",
          heading: "High-Protein",
          description:
            "Perfect for muscle building and active lifestyles.\nFeatures lean meats, legumes, dairy, and protein-rich snacks.\nHelps with satiety, energy, and recovery after workouts."
        },
        {
          image: "",
          heading: "Low-Carb",
          description:
            "Designed to reduce carbohydrate intake for better metabolism.\nHighlights proteins, healthy fats, and non-starchy vegetables.\nSupports weight management and balanced blood sugar levels."
        }
      ];
      


    return(
        <div className="FoodType">
            <h3>foodtype</h3>
            <SlidingBlocks data={foodTypesDetails}/>
        </div>
    )
}

export default FoodType;