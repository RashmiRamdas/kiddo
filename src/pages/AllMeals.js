import React, { useContext, useEffect } from "react";
import "../styles/all-meals.scss";

import { breakfastData } from "../assets/data/food";
import { lunchData } from "../assets/data/food";
import { useLocation } from "react-router";
import { BreakfastLunch } from "../components/BreakfastLunch";
import { MealsContext } from "./MealsContext";

export const AllMeals = () => {
  const location = useLocation();
  const { breakfast, lunch, updateMeals } = useContext(MealsContext);

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView();
      }
    }
  }, [location]);

  useEffect(() => {
    updateMeals("lunch", lunchData);
    updateMeals("breakfast", breakfastData);
  }, []);


  return (
    <>
      <div className="all-meals--section-one">
        <div>
          <h1>Our meals</h1>
          <p className="all-meals--section-one--desc">
            Introduce your little one to their first 100 flavors to raise a
            healthy eater for life
          </p>
        </div>
        <button className="button">Shop Now</button>
      </div>
      <div id="kiddo-meals" className="all-meals--section-two">
        <h3 className="all-meals--section-two-title">KIDDO MEALS</h3>
        <p className="all-meals--section-two-desc">
          Our original meals made for little ones above 6 months
        </p>
      </div>

      <BreakfastLunch lunch={lunchData} breakfast={breakfastData} />
    </>
  );
};
