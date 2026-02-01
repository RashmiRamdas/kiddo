import React, { useState } from "react";

export const MealsContext = React.createContext({});

export const MealsProvider = ({ children }) => {
  const [lunch, setLunch] = useState([]);
  const [breakfast, setBreakfast] = useState([]);

  const updateMeals = (mealType, data) => {
    mealType === "lunch" ? setLunch(data) : setBreakfast(data);
  };

  return (
    <MealsContext.Provider value={{ lunch, breakfast, updateMeals }}>
      {children}
    </MealsContext.Provider>
  );
};
