import { useRef } from "react";
import "./SlidingBlocks.css";

const SlidingBlocks = ({ data = [] }) => {
  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollLeft -= 400;
  };

  const scrollRight = () => {
    scrollRef.current.scrollLeft += 400;
  };

  const handleClick = () => {
    console.log("Recipe Catagory is Clicked");
  };
  return (
    <div className="Sliding-Blocks">
      <button className="scroll-btn left" onClick={scrollLeft}>
        ←
      </button>

      <div className="Recipe-Catagories-wrapper">
        <div
          className="Recipe-Catagories-mealtype"
          ref={scrollRef}
          id="scrollContainer"
        >
          {data.map((item, i) => (
            <div className="MealType-catagory" onClick={handleClick} key={i}>
              <img src={item.image === ""? null : item.image } alt="Recipe Type Image" /> 
              <div>
                <h3 className="MealType-catagory-heading">{item.heading}</h3>
                <p className="MealType-catagory-desciption">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="scroll-btn right" onClick={scrollRight}>
          →
        </button>
      </div>
    </div>
  );
};

export default SlidingBlocks;
