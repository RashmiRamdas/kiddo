import React, { useState } from "react";
import "../styles/navbar.scss";
import baby from "../assets/images/baby_eating.jpg";
import snacks from "../assets/images/snacks.jpg";
import { Link } from "react-router";

const mealsMenuItems = [
  {
    img: baby,
    notes: {
      title: "Best Sellers",
      description: "A special selection of our most loved items",
    },
    to: "/best-seller",
  },
  {
    img: snacks,
    notes: {
      title: "Meals",
      description: "Our original best-sellers made for little ones 6+ months",
    },
    to: "/menu#kiddo-meals",
  },
];

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <ul className="navbar">
        <li
          className="navbar-item navbar-item__meals"
          onMouseEnter={() => setOpenMenu(true)}
          onMouseLeave={() => setOpenMenu(false)}
        >
          <Link className="navbar-item--link" to="/menu">
            <span>
              Our Meals <i className="navbar__downarrow"></i>
            </span>
          </Link>

          <div className="navbar-item__meals__menu-items">
            {openMenu &&
              mealsMenuItems.map((item, index) => {
                return (
                  <Link
                    key={index}
                    className="navbar-item__meals__menu-item--link"
                    to={item.to}
                  >
                    <div className="navbar-item__meals__menu-item">
                      <img src={item.img} alt=""></img>
                      <p className="navbar-item__meals__menu-item--description">
                        <span>{item.notes.title}</span>
                        <span>{item.notes.description}</span>
                      </p>
                    </div>
                  </Link>
                );
              })}
          </div>
        </li>
        <li className="navbar-item">
          <a className="navbar-item--link" href="https://www.google.com/">
            {" "}
            Login
          </a>
        </li>
      </ul>
    </>
  );
};
