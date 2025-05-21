import SlidingBlocks from "./SlidingBlock";

const CookingTime = () => {

    const cookingTimesDetails = [
        {
          image: "https://media.istockphoto.com/id/1391222911/vector/five-minutes-icon-isolated-on-white-background-cooking-time-concept.jpg?s=612x612&w=0&k=20&c=pikS_J9Ms8NO8eq7IA3n96Edio-vCjEDQecgS5UY4lI=",
          heading: "Under 10 minutes",
          description:
            "Perfect for ultra-quick recipes when you're short on time.\nGreat for smoothies, sandwiches, salads, and instant snacks.\nIdeal for busy mornings or quick-fix meals during breaks."
        },
        {
          image: "https://media.istockphoto.com/id/1095986116/vector/ten-minutes-icon.jpg?s=612x612&w=0&k=20&c=kSn7HY7nD36M6Gizqpo8LlBRpHhsx0dSF4o-5w27A4A=",
          heading: "10 minutes",
          description:
            "A little more time to whip up simple yet satisfying dishes.\nGreat for stir-fries, scrambled eggs, or quick pasta.\nPerfect for those who want tasty food fast without compromising on flavor."
        },
        {
          image: "https://static.vecteezy.com/system/resources/previews/007/225/339/non_2x/20-timer-minutes-symbol-black-style-vector.jpg",
          heading: "20 minutes",
          description:
            "Ideal for easy weeknight dinners or healthy meal prep.\nDishes like grilled chicken, one-pot veggies, or sautéed meals fit here.\nJust enough time to enjoy cooking without rushing."
        },
        {
          image: "https://static.vecteezy.com/system/resources/previews/007/224/668/non_2x/30-timer-minutes-symbol-black-style-vector.jpg",
          heading: "30 minutes",
          description:
            "A balanced time window for a wholesome and hearty meal.\nFrom curries to casseroles, this duration suits a wide range of dishes.\nGreat for everyday cooking with minimal effort."
        },
        {
          image: "https://media.istockphoto.com/id/1337488470/vector/the-60-minutes-stopwatch-vector-icon-stopwatch-icon-in-flat-style-timer-on-on-color.jpg?s=612x612&w=0&k=20&c=-2YlW1sbzYg4QN-XHHvdQd2Yl7hYYIGJXaLUGMA2hxQ=",
          heading: "60 minutes",
          description:
            "Perfect for more elaborate meals or slow-cooked flavors.\nBaking, roasting, and layered dishes shine in this time frame.\nIdeal for dinner with family or guests when you're not in a hurry."
        },
        {
          image: "https://static.vecteezy.com/system/resources/previews/025/661/056/non_2x/2-hours-timer-symbol-black-color-vector.jpg",
          heading: "More than 2 hours",
          description:
            "Best for special recipes that require patience and care.\nSlow-cooked stews, marinades, and rich baked dishes fall here.\nPerfect for weekends, celebrations, or when you want to impress."
        }
      ];  

    return(
        <div className="CookingTime">
            <h2 className="Recipe-catagory-name">Recepies as Cooking Time</h2>
            <SlidingBlocks data={cookingTimesDetails}/>
        </div>
    )
}

export default CookingTime;