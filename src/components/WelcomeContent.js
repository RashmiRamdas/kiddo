import React from "react";
import "../styles/welcome-content.scss";
import ingredients from "../assets/images/ingredients.png";
import portion from "../assets/images/portion.svg";
import science from "../assets/images/science.png";
import delivery from "../assets/images/home-delivery.svg";
import bowl from "../assets/images/heath-bowl.jpg";
import eating from "../assets/images/eating.png";

export const WelcomeContent = () => {
  return (
    <>
      <div className="welcome-content--section-one">
        <div className="welcome-content--section-one--desc">
          <h1 className="welcome-content--section-one--desc--title">
            Foster a Lifelong Healthy Eating Habit
          </h1>
          <button className="button">Shop Now</button>
        </div>
        <img src={eating} />
      </div>
      <div className="welcome-content--section-two">
        <div className="welcome-content--section-two--header">
          <h2 className="welcome-content--section-two--header--heading">
            Meals made for your little one
          </h2>
          <p className="welcome-content--section-two--header--desc">
            We've built Kiddo with a deep understanding of what's most important
            when it comes to feeding your child, so it's one less thing you have
            to worry about.
          </p>
        </div>
        <div className="welcome-content--section-two--recipes">
          <div>
            <div>
              <img
                className="welcome-content--section-two--recipes--desc-img"
                src={ingredients}
                alt=""
              />
              <h3>Real ingredients</h3>
              <p>All our ingredients are organic, frheath-bowleshly chosen</p>
            </div>

            <div>
              <img
                className="welcome-content--section-two--recipes--desc-img"
                src={portion}
                alt=""
              />
              <h3>Perfectly portioned</h3>
              <p>For babies and toddlers 6 months+</p>
            </div>
          </div>
          <div>
            <img
              className="welcome-content--section-two--recipes--health-bowl"
              src={bowl}
              alt=""
            />
          </div>
          <div>
            <div>
              <img
                className="welcome-content--section-two--recipes--desc-img"
                src={science}
                alt=""
              />
              <h3>Science-backed</h3>
              <p>
                All Kiddo meals are created by a chef and team of neonatal
                nutritionists.
              </p>
            </div>
            <div>
              <img
                className="welcome-content--section-two--recipes--desc-img"
                src={delivery}
                alt=""
              />
              <h3>Delivered to you</h3>
              <p>
                Kiddo's meals are made fresh and shipped frozen to your door.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
