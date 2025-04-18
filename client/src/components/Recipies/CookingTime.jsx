import SlidingBlocks from "./SlidingBlock";

const CookingTime = () => {

    const cookingTimesDetails = [
        {
          image: "",
          heading: "Under 10 minutes",
          description:
            "Perfect for ultra-quick recipes when you're short on time.\nGreat for smoothies, sandwiches, salads, and instant snacks.\nIdeal for busy mornings or quick-fix meals during breaks."
        },
        {
          image: "",
          heading: "10 minutes",
          description:
            "A little more time to whip up simple yet satisfying dishes.\nGreat for stir-fries, scrambled eggs, or quick pasta.\nPerfect for those who want tasty food fast without compromising on flavor."
        },
        {
          image: "",
          heading: "20 minutes",
          description:
            "Ideal for easy weeknight dinners or healthy meal prep.\nDishes like grilled chicken, one-pot veggies, or sautéed meals fit here.\nJust enough time to enjoy cooking without rushing."
        },
        {
          image: "",
          heading: "30 minutes",
          description:
            "A balanced time window for a wholesome and hearty meal.\nFrom curries to casseroles, this duration suits a wide range of dishes.\nGreat for everyday cooking with minimal effort."
        },
        {
          image: "",
          heading: "60 minutes",
          description:
            "Perfect for more elaborate meals or slow-cooked flavors.\nBaking, roasting, and layered dishes shine in this time frame.\nIdeal for dinner with family or guests when you're not in a hurry."
        },
        {
          image: "",
          heading: "More than 2 hours",
          description:
            "Best for special recipes that require patience and care.\nSlow-cooked stews, marinades, and rich baked dishes fall here.\nPerfect for weekends, celebrations, or when you want to impress."
        }
      ];  

    return(
        <div className="CookingTime">
            <SlidingBlocks data={cookingTimesDetails}/>
        </div>
    )
}

export default CookingTime;