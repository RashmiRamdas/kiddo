import React, { use, useEffect } from "react";
import bs from "../assets/images/bs-intro.png";
import "../styles/best-seller.scss";

import { breakfastData } from "../assets/data/food";
import { lunchData } from "../assets/data/food";
import { BreakfastLunch } from "../components/BreakfastLunch";

const bestsellerLunch = lunchData.filter(item => item.isBestseller)
const bestsellerBf= breakfastData.filter(item => item.isBestseller)

export const Bestseller = () => {
  
  return (
    <>
      <div className="best-seller--section-one">
        <div className="best-seller--section-one--desc">
          <h1 className="best-seller--section-one--desc--title">
            Best Sellers
          </h1>
          <p className="best-seller--section-one--desc--description">
            Introduce your little one to their first 100 flavors to raise a
            healthy eater for life
          </p>
        </div>
        <img src={bs} />
      </div>
      <BreakfastLunch lunch={bestsellerLunch} breakfast={bestsellerBf} />
    </>
  );
};
