import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import { MealsContext } from "./MealsContext";

export const Product = () => {
  const { id, type } = useParams();
  const {breakfast, lunch} = useContext(MealsContext)
  console.log(breakfast, lunch)

  return (
    <div className="product">
      <div className="product__section-one">hello 
        <img />
      </div>
    </div>
  );
};
