import SlidingBlocks from "./SlidingBlock";

const FoodType = () => {

    const foodTypesDetails = [
        {
          image: "https://images.pexels.com/photos/1359326/pexels-photo-1359326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          heading: "Vegetarian",
          description:
            "Plant-based meals made without meat, fish, or poultry.\nRich in fruits, vegetables, grains, legumes, and dairy products.\nIdeal for those who seek a balanced, ethical, and sustainable diet."
        },
        {
          image: "https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          heading: "Non-Vegetarian",
          description:
            "Includes a variety of dishes made with meat, poultry, or seafood.\nOffers high-quality proteins and rich flavors.\nPerfect for those who enjoy a diverse and hearty food experience."
        },
        {
          image: "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          heading: "Vegan",
          description:
            "Completely free from animal products including dairy and eggs.\nCentered around whole grains, legumes, fruits, and vegetables.\nGreat for compassionate eating and environmental consciousness."
        },
        {
          image: "https://images.pexels.com/photos/1306548/pexels-photo-1306548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          heading: "Gluten-Free",
          description:
            "Carefully prepared meals without wheat, barley, or rye.\nIdeal for people with gluten intolerance or celiac disease.\nFocuses on rice, corn, quinoa, and naturally gluten-free ingredients."
        },
        {
          image: "https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          heading: "Keto",
          description:
            "A low-carb, high-fat diet designed to put your body in ketosis.\nIncludes meats, dairy, healthy oils, and leafy greens.\nGreat for weight loss and steady energy without sugar spikes."
        },
        {
          image: "https://images.pexels.com/photos/31610385/pexels-photo-31610385/free-photo-of-artisan-breadsticks-with-fresh-micro-greens.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          heading: "Diabetic-Friendly",
          description:
            "Meals designed to maintain stable blood sugar levels.\nFocuses on complex carbs, lean proteins, and low-glycemic foods.\nBalanced and tasty options for people managing diabetes."
        },
        {
          image: "https://images.pexels.com/photos/76227/pexels-photo-76227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          heading: "Paleo",
          description:
            "Inspired by the eating habits of early humans.\nAvoids processed foods, grains, and dairy.\nEmphasizes whole foods like meats, nuts, fruits, and vegetables."
        },
        {
          image: "https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          heading: "High-Protein",
          description:
            "Perfect for muscle building and active lifestyles.\nFeatures lean meats, legumes, dairy, and protein-rich snacks.\nHelps with satiety, energy, and recovery after workouts."
        },
        {
          image: "https://images.pexels.com/photos/7511806/pexels-photo-7511806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          heading: "Low-Carb",
          description:
            "Designed to reduce carbohydrate intake for better metabolism.\nHighlights proteins, healthy fats, and non-starchy vegetables.\nSupports weight management and balanced blood sugar levels."
        }
      ];
      


    return(
        <div className="FoodType">
          <h2 className="Recipe-catagory-name">Recepies Food Type</h2>
            <SlidingBlocks data={foodTypesDetails}/>
        </div>
    )
}

export default FoodType;