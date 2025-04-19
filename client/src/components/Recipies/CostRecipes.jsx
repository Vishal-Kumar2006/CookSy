import SlidingBlocks from "./SlidingBlock";

const CostRecepies = () => {

    const priceRanges = [
        {
          image: "",
          heading: "Super Budget",
          description:
            "Ideal for ultra-low-cost street food or simple homemade snacks.\nThink samosas, boiled eggs, or small servings of tea or coffee.\nPerfect when you want a quick bite without spending much."
        },
        {
          price: 50,
          heading: "Affordable Bites",
          description:
            "Covers small meals like sandwiches, momos, or basic fast food.\nGreat for college canteen meals or quick street food options.\nLight on your wallet, full on flavor."
        },
        {
          price: 70,
          heading: "Quick Meal",
          description:
            "Enough for a filling snack or a modest lunch plate.\nIncludes small thalis, rolls, or a bowl of noodles.\nBudget-friendly and satisfying for everyday hunger."
        },
        {
          price: 100,
          heading: "Standard Meal",
          description:
            "Good for a full plate meal or a decent fast-food combo.\nCovers dishes like biryani, burgers, or regular home-cooked thalis.\nAffordable option for lunch or dinner on the go."
        },
        {
          price: 150,
          heading: "Hearty Serving",
          description:
            "Get generous portions with sides or desserts included.\nPerfect for dine-in plates or restaurant-style takeaway.\nBalanced between taste and value."
        },
        {
          price: 200,
          heading: "Full Course Delight",
          description:
            "Great for multi-item meals or small group servings.\nCovers combo meals, medium pizzas, or two-course plates.\nPerfect for sharing or satisfying a big appetite."
        },
        {
          price: 250,
          heading: "Premium Casual",
          description:
            "Covers mid-range restaurant meals or specialty cuisine.\nGreat for high-quality burgers, pasta, or regional delicacies.\nIdeal for occasional indulgence or dates."
        },
        {
          price: 300,
          heading: "Elevated Experience",
          description:
            "Enjoy fine dining starters, signature dishes, or exotic meals.\nSuitable for curated menus and chef specials.\nGood for when you want something a bit fancy."
        },
        {
          price: 350,
          heading: "Rich & Refined",
          description:
            "Think fusion platters, artisan foods, or gourmet meals.\nUsually includes one or two main items with rich ingredients.\nPerfect for special days or culinary experiences."
        },
        {
          price: 450,
          heading: "Luxury Feast",
          description:
            "Includes multi-course meals at high-end restaurants.\nIdeal for dinner dates, business lunches, or fine-dining spots.\nOffers taste, ambiance, and presentation together."
        },
        {
          price: 500,
          heading: "Gourmet Indulgence",
          description:
            "Top-tier dining with world-class dishes and unique plating.\nPerfect for anniversaries, celebrations, or food lovers.\nThis is where flavor meets luxury."
        }
      ];
      


    return(
        <div className="CostRecepies">
           <h2 className="Recipe-catagory-name">Cost Wise Recipes per Plate </h2>
            <SlidingBlocks data={priceRanges}/>
        </div>
    )
}

export default CostRecepies;