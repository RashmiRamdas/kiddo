import React from "react";
import "../styles/meal-card.scss";
import bs from "../assets/images/best-seller.png";
import { useNavigate } from "react-router";

export const MealCard = ({
  img,
  title,
  description,
  available,
  isBestseller,
  id,
  isLunch,
}) => {
  const navigate = useNavigate();

  const learnMoreClickHandler = () => {
    const type = isLunch ? "lunch" : "breakfast";
    navigate(`/menu/products/${title}/${id}/${type}`);
  };

  return (
    <div className="meal-card">
      <img className="meal-card--img" src={img} alt="" />
      {isBestseller && (
        <img className="meal-card--best-seller" src={bs} alt="" />
      )}
      <h3 className="meal-card--title">{title}</h3>
      <p className="meal-card--desc">{description}</p>
      {available && (
        <button onClick={learnMoreClickHandler} className="button button-lg">
          LEARN MORE
        </button>
      )}
      {!available && (
        <button className="button button-lg button-secondary ">
          NOTIFY ME WHEN AVAILABLE
        </button>
      )}
    </div>
  );
};
