import SlidingBlocks from "./SlidingBlock";

const CostRecepies = () => {
  const priceRanges = [
    {
      image:
        "https://images.pexels.com/photos/9592528/pexels-photo-9592528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      heading: "10",
      description:
        "Ideal for ultra-low-cost street food or simple homemade snacks.\nThink samosas, boiled eggs, or small servings of tea or coffee.\nPerfect when you want a quick bite without spending much.",
    },
    {
      image:
        "https://images.pexels.com/photos/4109047/pexels-photo-4109047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      heading: "20",
      description:
        "Covers small meals like sandwiches, momos, or basic fast food.\nGreat for college canteen meals or quick street food options.\nLight on your wallet, full on flavor.",
    },
    {
      image:
        "https://images.pexels.com/photos/8108148/pexels-photo-8108148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      heading: "30",
      description:
        "Enough for a filling snack or a modest lunch plate.\nIncludes small thalis, rolls, or a bowl of noodles.\nBudget-friendly and satisfying for everyday hunger.",
    },
    {
      image:
        "https://images.pexels.com/photos/31682079/pexels-photo-31682079/free-photo-of-delicious-pancakes-with-fresh-raspberries.jpeg?auto=compress&cs=tinysrgb&w=600",
      heading: "50",
      description:
        "Good for a full plate meal or a decent fast-food combo.\nCovers dishes like biryani, burgers, or regular home-cooked thalis.\nAffordable option for lunch or dinner on the go.",
    },
    {
      image:
        "https://images.pexels.com/photos/1839267/pexels-photo-1839267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      heading: "100",
      description:
        "Get generous portions with sides or desserts included.\nPerfect for dine-in plates or restaurant-style takeaway.\nBalanced between taste and value.",
    },
    {
      image:
        "https://images.pexels.com/photos/30469688/pexels-photo-30469688/free-photo-of-elegant-fine-dining-plated-gourmet-dishes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      heading: "150",
      description:
        "Great for multi-item meals or small group servings.\nCovers combo meals, medium pizzas, or two-course plates.\nPerfect for sharing or satisfying a big appetite.",
    },
    {
      image:
        "https://images.pexels.com/photos/31651222/pexels-photo-31651222/free-photo-of-group-enjoying-pizza-at-outdoor-bali-cafe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      heading: "200",
      description:
        "Covers mid-range restaurant meals or specialty cuisine.\nGreat for high-quality burgers, pasta, or regional delicacies.\nIdeal for occasional indulgence or dates.",
    },
    {
      image:
        "https://images.pexels.com/photos/24870665/pexels-photo-24870665/free-photo-of-meat-meal-on-plate.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      heading: "250",
      description:
        "Enjoy fine dining starters, signature dishes, or exotic meals.\nSuitable for curated menus and chef specials.\nGood for when you want something a bit fancy.",
    },
    {
      image:
        "https://images.pexels.com/photos/4109998/pexels-photo-4109998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      heading: "300",
      description:
        "Think fusion platters, artisan foods, or gourmet meals.\nUsually includes one or two main items with rich ingredients.\nPerfect for special days or culinary experiences.",
    },
    {
      image:
        "https://images.pexels.com/photos/20475780/pexels-photo-20475780/free-photo-of-food-and-drinks-served-on-ramadan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      heading: "400",
      description:
        "Includes multi-course meals at high-end restaurants.\nIdeal for dinner dates, business lunches, or fine-dining spots.\nOffers taste, ambiance, and presentation together.",
    },
    {
      image:
        "https://images.pexels.com/photos/31683278/pexels-photo-31683278/free-photo-of-freshly-baked-cinnamon-rolls-with-icing.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      heading: "500",
      description:
        "Top-tier dining with world-class dishes and unique plating.\nPerfect for anniversaries, celebrations, or food lovers.\nThis is where flavor meets luxury.",
    },
  ];

  return (
    <div className="CostRecepies">
      <h2 className="Recipe-catagory-name">Recipes as Cost per Plate </h2>
      <SlidingBlocks data={priceRanges} type={"cost"} />
    </div>
  );
};

export default CostRecepies;
