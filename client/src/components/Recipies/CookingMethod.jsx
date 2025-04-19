import SlidingBlocks from "./SlidingBlock";

const CookingMethod = () => {

    const cookingMethodsDetails = [
        {
          image: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600",
          heading: "Fried",
          description:
            "Cooking food by submerging it in hot oil or fat.\nIt creates a crispy texture and rich flavor, commonly used for snacks and comfort foods.\nDeep frying and shallow frying are the two popular variations."
        },
        {
          image: "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          heading: "Baked",
          description:
            "Uses dry heat in an oven to cook food evenly.\nIdeal for bread, pastries, casseroles, and meats.\nThis method enhances flavor and texture while preserving moisture."
        },
        {
          image: "",
          heading: "Grilled",
          description:
            "Involves cooking food over direct heat, usually on a grill.\nAdds a smoky flavor and charred texture, great for meats and vegetables.\nPopular for outdoor barbecues and health-conscious meals."
        },
        {
          image: "",
          heading: "Steamed",
          description:
            "Uses steam from boiling water to cook food gently.\nRetains nutrients, color, and natural taste—perfect for vegetables and seafood.\nA healthy and low-fat cooking method ideal for light meals."
        },
        {
          image: "",
          heading: "Boiled",
          description:
            "Involves cooking ingredients in bubbling water or broth.\nPerfect for pasta, rice, soups, and eggs.\nA simple method that softens food while infusing flavors if using broth."
        },
        {
          image: "",
          heading: "Raw",
          description:
            "Food is consumed without any heat treatment.\nCommon in salads, fruits, sushi, and raw vegan dishes.\nMaintains all natural enzymes and nutrients, offering a fresh and clean taste."
        }
      ];

    return(
        <div className="CookingMethod">
            <h2 className="Recipe-catagory-name">Cooking Method</h2>
            <SlidingBlocks data={cookingMethodsDetails} />
        </div>
    )
}

export default CookingMethod;