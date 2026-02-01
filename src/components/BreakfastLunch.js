import React from "react";
import { MealCard } from "../components/MealCard";

import "../styles/breakfast-lunch.scss";

export const BreakfastLunch = ({breakfast, lunch }) => {
  return (
    <>
      <div className="bf-lunch--section-three">
        <div className="bf-lunch--section-three--line"></div>
        <h4 className="bf-lunch--section-three--heading"> BREAKFAST</h4>
        <div className="bf-lunch--section-three--line"></div>
      </div>

      <div className="bf-lunch--section-four">
        {breakfast.map((meal, index) => {
          return (
            <MealCard
              key={index}
              img={meal.img}
              title={meal.title}
              description={meal.description}
              available={meal.available}
              isBestseller={meal.isBestseller}
              id={meal.id}
              isLunch={false}
            />
          );
        })}
      </div>

      <div className="bf-lunch--section-five">
        <div className="bf-lunch--section-three--line"></div>
        <h4 className="bf-lunch--section-three--heading"> LUNCH and DINNER</h4>
        <div className="bf-lunch--section-three--line"></div>
      </div>

      <div className="bf-lunch--section-six">
        {lunch.map((meal, index) => {
          return (
            <MealCard
              key={index}
              img={meal.img}
              title={meal.title}
              description={meal.description}
              available={meal.available}
              isBestseller={meal.isBestseller}
              id={meal.id}
              isLunch={true}
            />
          );
        })}
      </div>
    </>
  );
};
