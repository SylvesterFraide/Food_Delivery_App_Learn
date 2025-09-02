import { Category, Description } from "@mui/icons-material";
import cake from "../../assets/Menu/cake.avif";
import desert from "../../assets/Menu/desert.avif";
import noodle from "../../assets/Menu/noodle.avif";
import pasta from "../../assets/Menu/pasta.avif";
import rolls from "../../assets/Menu/rolls.avif";
import salad from "../../assets/Menu/salad.avif";
import sandwich from "../../assets/Menu/sandwich.avif";
import veg from "../../assets/Menu/veg.avif";

import bread_sandwich from "../../assets/ListItem/bread_sandwich.jpg";
import butter_noodles from "../../assets/ListItem/butter_noodles.jpg";
import butter_scotch_cake from "../../assets/ListItem/butter_scotch_cake.webp";
import cheese_pasta from "../../assets/ListItem/cheese_pasta.jpg";
import chicken_pasta from "../../assets/ListItem/chicken_pasta.jpg";
import chicken_salad from "../../assets/ListItem/chicken_salad.avif";
import chicken_sandwich from "../../assets/ListItem/chicken_sandwich.webp";
import chicken_rolls from "../../assets/ListItem/chicken_spring_rolls.jpg";
import clover_salad from "../../assets/ListItem/clover_salad.avif";
import cooked_noodles from "../../assets/ListItem/cooked_noodles.jpg";
import creamy_pasta from "../../assets/ListItem/creamy_pasta.jpg";
import cup_cake from "../../assets/ListItem/cup_cake.jpg";
import fried_cauliflower from "../../assets/ListItem/fried_cauliflower.jpg";
import fruit_ice_cream from "../../assets/ListItem/Fruit_Ice _Cream.avif";
import garlic_mashroom from "../../assets/ListItem/garlic_mashroom.jpg";
import greek_salad from "../../assets/ListItem/greek_salad.jpg";
import grilled_sandwich from "../../assets/ListItem/grilled_sandwich.avif";
import jar_ice_cream from "../../assets/ListItem/jar_ice_cream.jpg";
import lasagna_rolls from "../../assets/ListItem/lasagna_rolls.jpg";
import mix_veg_pulau from "../../assets/ListItem/mix_veg_pulau.jpg";
import peri_peri_rolls from "../../assets/ListItem/peri_peri_rolls.jpg";
import rice_zucchini from "../../assets/ListItem/rice_zucchini.jpg";
import ripple_ice_cream from "../../assets/ListItem/ripple_ice_cream.webp";
import sliced_cake from "../../assets/ListItem/sliced_cake.webp";
import somen_noodles from "../../assets/ListItem/somen_noodles.jpg";
import tomato_pasta from "../../assets/ListItem/tomato_pasta.jpg";
import vanilla_ice_cream from "../../assets/ListItem/vanilla_ice_cream.webp";
import veg_noodles from "../../assets/ListItem/veg_noodles.jpg";
import veg_roll from "../../assets/ListItem/veg_roll.jpg";
import veg_salad from "../../assets/ListItem/veg_salad.jpg";
import vegan_cake from "../../assets/ListItem/vegan_cake.jpg";
import vegan_sandwich from "../../assets/ListItem/vegan_sandwich.avif";

export const MenuList = [
  {
    name: "Cake",
    image: cake,
  },
  {
    name: "Desert",
    image: desert,
  },
  {
    name: "Noodle",
    image: noodle,
  },
  {
    name: "Pasta",
    image: pasta,
  },
  {
    name: "Rolls",
    image: rolls,
  },
  {
    name: "Salad",
    image: salad,
  },
  {
    name: "Sandwich",
    image: sandwich,
  },
  {
    name: "Pure veg",
    image: veg,
  },
];

export const Food_List = [
  {
    id: 1,
    name: "Garlic Mashroom",
    description:
      "Delicious garlic flavored, served as a side dish, on toast or in pasta",
    price: 13.99,
    image: garlic_mashroom,
    category: "Desert",
  },

  {
    id: 2,
    name: "Fried Cauliflower",
    description: "Crispy fried cauliflower florets, seasoned to perfection",
    price: 23,
    image: fried_cauliflower,
    category: "Desert",
  },

  {
    id: 3,
    name: "Mix Veg Pulau",
    description:
      "Aromatic basmati rice cooked with mixed vegetables and spices",
    price: 23.49,
    image: mix_veg_pulau,
    category: "Desert",
  },

  {
    id: 4,
    name: "Rice Zucchini",
    description: "Flavorful rice dish cooked with zucchini and spices",
    price: 14.99,
    image: rice_zucchini,
    category: "Desert",
  },

  {
    id: 5,
    name: "Lasagna Rolls",
    description: "Layers of pasta with meat, cheese, and tomato sauce",
    price: 15,
    image: lasagna_rolls,
    category: "Rolls",
  },

  {
    id: 6,
    name: "Peri Peri Rolls",
    description: "Spicy rolls filled with vegetables and peri peri sauce",
    price: 24,
    image: peri_peri_rolls,
    category: "Rolls",
  },

  {
    id: 7,
    name: "Chicken Rolls",
    description:
      "Home-made Chicken Spring Rolls filled with chicken mince and vegetables!",
    price: 25.49,
    image: chicken_rolls,
    category: "Rolls",
  },

  {
    id: 8,
    name: "Veg Rolls",
    description:
      "Made with whole wheat flour and mixed veggies, makes for a great meal for kids",
    price: 14,
    image: veg_roll,
    category: "Rolls",
  },

  {
    id: 9,
    name: "Ripple Ice Cream",
    description:
      "Rich custard ice cream can only be improved by sharp raspberry sauce",
    price: 23.49,
    image: ripple_ice_cream,
    category: "Pure veg",
  },

  {
    id: 10,
    name: "Fruit Ice Cream",
    description: "Refreshing ice cream made with real fruit",
    price: 23,
    image: fruit_ice_cream,
    category: "Pure veg",
  },

  {
    id: 11,
    name: "Jar Ice Cream",
    description:
      "Mason jar ice cream is the easiest, fastest way to make the exact",
    price: 16,
    image: jar_ice_cream,
    category: "Pure veg",
  },

  {
    id: 12,
    name: "Vanilla Ice Cream",
    description: "Classic vanilla ice cream made with real vanilla beans",
    price: 29,
    image: vanilla_ice_cream,
    category: "Pure veg",
  },

  {
    id: 13,
    name: "Greek Salad",
    description:
      "Fresh salad with cucumbers, tomatoes, olives, and feta cheese",
    price: 17.55,
    image: greek_salad,
    category: "Salad",
  },

  {
    id: 14,
    name: "Veg Salad",
    description:
      "Healthy salad with mixed greens, cherry tomatoes, and cucumbers",
    price: 25,
    image: veg_salad,
    category: "Salad",
  },

  {
    id: 15,
    name: "Clover Salad",
    description:
      "A fresh salad with clover leaves, cucumbers, and a light dressing",
    price: 10,
    image: clover_salad,
    category: "Salad",
  },

  {
    id: 16,
    name: "Chicken Salad",
    description:
      "A hearty salad with grilled chicken, mixed greens, and a tangy dressing",
    price: 12,
    image: chicken_salad,
    category: "Salad",
  },

  {
    id: 17,
    name: "Chicken Sandwich",
    description:
      "A delicious sandwich filled with grilled chicken and fresh vegetables",
    price: 18.2,
    image: chicken_sandwich,
    category: "Sandwich",
  },

  {
    id: 18,
    name: "Vegan Sandwich",
    description:
      "The best veggie sandwich bursts with color, flavor, and texture.",
    price: 17.5,
    image: vegan_sandwich,
    category: "Sandwich",
  },

  {
    id: 19,
    name: "Grilled Sandwich",
    description:
      "Popular street food all over the world. These Mumbai style grilled sandwiches",
    price: 18.5,
    image: grilled_sandwich,
    category: "Sandwich",
  },

  {
    id: 20,
    name: "Bread Sandwich",
    description:
      "Made with ingredients that make homemade white bread superior to storebought — butter",
    price: 16,
    image: bread_sandwich,
    category: "Sandwich",
  },

  {
    id: 21,
    name: "Cup Cake",
    description: "A delicious cupcake with a rich frosting",
    price: 22.5,
    image: cup_cake,
    category: "Cake",
  },

  {
    id: 22,
    name: "Vegan Cake",
    description:
      "Two layers of vanilla sponge, topped with a velvety vegan buttercream.",
    price: 10,
    image: vegan_cake,
    category: "Cake",
  },

  {
    id: 23,
    name: "ButterScotch Cake",
    description: "A rich and creamy butter scotch cake",
    price: 11,
    image: butter_scotch_cake,
    category: "Cake",
  },

  {
    id: 24,
    name: "Sliced Cake",
    description: "A delicious cake served in slices",
    price: 19,
    image: sliced_cake,
    category: "Cake",
  },

  {
    id: 25,
    name: "Butter Noodles",
    description:
      "Noodles with butter, Parmesan cheese, salt, and pepper",
    price: 18,
    image: butter_noodles,
    category: "Noodle",
  },

  {
    id: 26,
    name: "Veg Noodles",
    description:
      "Super quick & delicious veg noodles made with lots of fresh vegetables",
    price: 24,
    image: veg_noodles,
    category: "Noodle",
  },

  {
    id: 27,
    name: "Somen Noodles",
    description: "Delicate noodles served in a light broth",
    price: 5.2,
    image: somen_noodles,
    category: "Noodle",
  },

  {
    id: 28,
    name: "Cooked Noodles",
    description:
      "Commonly enjoyed for breakfast, lunch, and dinner",
    price: 18,
    image: cooked_noodles,
    category: "Noodle",
  },

  {
    id: 29,
    name: "Cheese Pasta",
    description:
      "This Cheese Pasta is the most delicious broccoli cheese sauce!",
    price: 12.5,
    image: cheese_pasta,
    category: "Pasta",
  },

  {
    id: 30,
    name: "Tomato Pasta",
    description:
      "Rich tomato sauceAn easy and delicious Creamy Tomato Pasta.",
    price: 13,
    image: tomato_pasta,
    category: "Pasta",
  },

  {
    id: 31,
    name: "Creamy Pasta",
    description:
      "This is the best, with garlic, cream, and Parmesan cheese.",
    price: 12,
    image: creamy_pasta,
    category: "Pasta",
  },

  {
    id: 32,
    name: "Chicken Pasta",
    description:
      "Delicious with juicy chicken and a creamy yet lighter cheddar sauce.",
    price: 14,
    image: chicken_pasta,
    category: "Pasta",
  },
];
