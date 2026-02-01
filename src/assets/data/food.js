import cutletVegBowl from "../images/cutletVegBowl.png";
import brocolliVegBowl from "../images/brocolliVegBowl.png";
import eggVegBowl from "../images/eggVegBowl.png";
import noodleSoup from "../images/noodleSoup.png";

import berryVegBowl from "../images/berryVegBowl.png";
import pasta from "../images/pasta.png";
import momo from "../images/momo.png";
import chickenBowl from "../images/chickenBowl.png";

import poha from "../images/poha.png";
import dosa from "../images/dosa.png";
import idli from "../images/idli.png";
import chapathi from "../images/chapathi.png";
import pancake from "../images/pancake.png";

export const breakfastData = [
  {
    id: 100,
    img: poha,
    title: "Poha",
    description: "Beaten rice, peanut, coriander",
    available: true,
    isBestseller: true,
    price: "Rs. 30",
    type: "breakfast",
  },
  {
    id: 101,
    img: dosa,
    title: "Dosa Chutney",
    description: "Rice, Urad dal, coconut",
    available: true,
    isBestseller: false,
    price: "Rs. 50",
    type: "breakfast",
  },
  {
    id: 102,
    img: idli,
    title: "Idli Sambar",
    description: "Rice, Urad dal, veggies",
    available: false,
    notavailable: true,
    isBestseller: true,
    price: "Rs. 60",
    type: "breakfast",
  },
  {
    id: 103,
    img: chapathi,
    title: "Chapathi Kurma",
    description: "Wheat, veggies",
    available: true,
    isBestseller: false,
    price: "Rs. 70",
    type: "breakfast",
  },

  {
    id: 104,
    img: pancake,
    title: "Pancake",
    description: "Banana, Rice, honey",
    available: true,
    isBestseller: false,
    price: "Rs. 60",
    type: "breakfast",
  },
];

export const lunchData = [
  {
    id: 200,
    img: cutletVegBowl,
    title: "Cutlet Veggie bowl",
    description: "Veggies, Rice",
    available: true,
    isBestseller: false,
    price: "Rs. 200",
    type: "lunch",
  },
  {
    id: 201,
    img: brocolliVegBowl,
    title: "Brocolli Veggie bowl",
    description: "Veggies, Rice",
    available: false,
    notavailable: true,
    isBestseller: true,
    price: "Rs. 250",
    type: "lunch",
  },
  {
    id: 202,
    img: eggVegBowl,
    title: "Egg Veggie bowl",
    description: "Veggies, Rice, Egg",
    available: true,
    isBestseller: false,
    price: "Rs. 250",
    type: "lunch",
  },
  {
    id: 203,
    img: noodleSoup,
    title: "Noodle Soup bowl",
    description: "Veggies, Rice Noodle",
    available: true,
    isBestseller: false,
    price: "Rs. 220",
    type: "lunch",
  },
  {
    id: 204,
    img: berryVegBowl,
    title: "Berry Veg bowl",
    description: "Fruits, Rice",
    available: true,
    isBestseller: false,
    price: "Rs. 250",
    type: "lunch",
  },
  {
    id: 205,
    img: pasta,
    title: "Veggie Pasta",
    description: "Veggies, Pasta",
    available: true,
    isBestseller: false,
    price: "Rs. 210",
    type: "lunch",
  },
  {
    id: 206,
    img: momo,
    title: "Momos",
    description: "Wheat, Veggies",
    available: true,
    isBestseller: true,
    price: "Rs. 200",
    type: "lunch",
  },
  {
    id: 207,
    img: chickenBowl,
    title: "Chicken bowl",
    description: "Veggies, chicken, rice",
    available: true,
    isBestseller: false,
    rice: "Rs. 300",
    type: "lunch",
  },
];
