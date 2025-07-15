import SlidingBlocks from "./SlidingBlock";

const MealType = () => {
  const categories = [
    {
      image:
        "https://images.pexels.com/photos/2113556/pexels-photo-2113556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      heading: "Breakfast",
      description:
        "Start your morning with a nutritious and energizing breakfast.\nEnjoy a variety of wholesome foods that fuel your body and mind.\nPerfect to kickstart your day with a smile.",
    },
    {
      image:
        "https://images.pexels.com/photos/842545/pexels-photo-842545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      heading: "Lunch",
      description:
        "Midday meals that keep you full and focused throughout the day.\nPacked with balanced nutrition and bold flavors.\nIdeal for breaking the afternoon slump with delicious energy.",
    },
    {
      image:
        "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      heading: "Dinner",
      description:
        "End your day with satisfying dishes and hearty flavors.\nWhether light or indulgent, our dinners bring comfort and joy.\nPerfect for winding down and sharing with loved ones.",
    },
    {
      image:
        "https://images.pexels.com/photos/253580/pexels-photo-253580.jpeg?auto=compress&cs=tinysrgb&w=600",
      heading: "Brunch",
      description:
        "When breakfast meets lunch, magic happens.\nBrunch is a laid-back mix of morning and midday favorites.\nIdeal for weekends, catch-ups, and treating yourself to something special.",
    },
    {
      image:
        "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      heading: "Snacks",
      description:
        "Small bites with big impact — perfect for in-between meals.\nKeep your energy up with tasty, crunchy, or sweet options.\nSnacks made for sharing, traveling, or just munching solo.",
    },
    {
      image:
        "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=600",
      heading: "Dessert",
      description:
        "A sweet finale to any meal, because you deserve it.\nFrom rich chocolates to fruity delights, there's something for every craving.\nTreat yourself to the joy of indulgence with our desserts.",
    },
  ];

  return (
    <div className="MealType">
      <h2 className="Recipe-catagory-name">Meal Type</h2>
      <SlidingBlocks data={categories} type={"mealType"} />
    </div>
  );
};

export default MealType;
