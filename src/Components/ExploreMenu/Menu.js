import { Description } from '@mui/icons-material';
import cake from '../../assets/Menu/cake.avif';
import desert from '../../assets/Menu/desert.avif';
import noodle from '../../assets/Menu/noodle.avif';
import pasta from '../../assets/Menu/pasta.avif';
import rolls from '../../assets/Menu/rolls.avif';
import salad from '../../assets/Menu/salad.avif';
import sandwich from '../../assets/Menu/sandwich.avif';
import veg from '../../assets/Menu/veg.avif';

import bread_sandwich from '../../assets/ListItem/bread_sandwich.jpg';
import butter_noodles from '../../assets/ListItem/butter_noodles.jpg';
import butter_scotch_cake from '../../assets/ListItem/butter_scotch_cake.webp';
import cheese_pasta from '../../assets/ListItem/cheese_pasta.jpg';
import chicken_pasta from '../../assets/ListItem/chicken_pasta.jpg';
import chicken_salad from '../../assets/ListItem/chicken_salad.avif';
import chicken_sandwich from '../../assets/ListItem/chicken_sandwich.webp';
import chicken_rolls from '../../assets/ListItem/chicken_spring_rolls.jpg';
import clover_salad from '../../assets/ListItem/clover_salad.avif';
import cooked_noodles from '../../assets/ListItem/cooked_noodles.jpg';
import creamy_pasta from '../../assets/ListItem/creamy_pasta.jpg';
import cup_cake from '../../assets/ListItem/cup_cake.jpg';
import fried_cauliflower from '../../assets/ListItem/fried_cauliflower.jpg';
import fruit_ice_cream from '../../assets/ListItem/fruit_ice_cream.webp';
import garlic_mashroom from '../../assets/ListItem/garlic_mashroom.jpg';
import greek_salad from '../../assets/ListItem/greek_salad.jpg';
import grilled_sandwich from '../../assets/ListItem/grilled_sandwich.avif';
import jar_ice_cream from '../../assets/ListItem/jar_ice_cream.jpg';
import lasagna_rolls from '../../assets/ListItem/lasagna_rolls.jpg';
import mix_veg_pulau from '../../assets/ListItem/mix_veg_pulau.jpg';
import peri_peri_rolls from '../../assets/ListItem/peri_peri_rolls.jpg';
import rice_zucchini from '../../assets/ListItem/rice_zucchini.jpg';
import ripple_ice_cream from '../../assets/ListItem/ripple_ice_cream.webp';
import sliced_cake from '../../assets/ListItem/sliced_cake.webp';
import somen_noodles from '../../assets/ListItem/somen_noodles.jpg';
import tomato_pasta from '../../assets/ListItem/tomato_pasta.jpg';
import vanilla_ice_cream from '../../assets/ListItem/vanilla_ice_cream.webp';
import veg_noodles from '../../assets/ListItem/veg_noodles.jpg';
import veg_roll from '../../assets/ListItem/veg_roll.jpg';
import veg_salad from '../../assets/ListItem/veg_salad.jpg';
import vegan_cake from '../../assets/ListItem/vegan_cake.jpg';
import vegan_sandwich from '../../assets/ListItem/vegan_sandwich.avif';

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

export const Menu_List = [
  {
    id: 1,
    name: 'Garlic Mashroom',
    description: 'Delicious garlic flavored mushrooms, served as a side dish, on toast or in pasta',
    price: 3.99,
    image: garlic_mashroom,
  },

  {
    id: 2,
    name: 'Fried Cauliflower',
    description: 'Crispy fried cauliflower florets, seasoned to perfection',
    price: 2,
    image: fried_cauliflower,
  },

  {
    id:3,
    name: 'Mix Veg Pulau',
    description: 'Aromatic basmati rice cooked with mixed vegetables and spices',
    price: 3.49,
    image: mix_veg_pulau,
  },

  {
    id: 4,
    name: 'Rice Zucchini',
    description: 'Flavorful rice dish cooked with zucchini and spices',
    price: 4.99,
    image: rice_zucchini,
  },

  {
   id: 5,
   name: 'Lasagna Rolls',
   description: 'Layers of pasta with meat, cheese, and tomato sauce',
   price: 5,
   image: lasagna_rolls,
  },

  {
    id: 6,
    name: 'Peri Peri Rolls',
    description: 'Spicy rolls filled with vegetables and peri peri sauce',
    price: 4,
    image: peri_peri_rolls,
  },
  
  {
    id:7,
    name: 'Chicken Rolls',
    description: 'Home-made Chicken Spring Rolls filled with chicken mince and vegetables!',
    price: 5.49,
    image: chicken_rolls,
  },

  { 
    id:8,
    name: 'Veg Rolls',
    description: 'Veg rolls made with whole wheat flour and mixed veggies, makes for a great meal for kids',
    price: 4,
    image: veg_roll,
  },

  {
    id: 9,
    name: 'Ripple Ice Cream',
    description: 'This is a must for summer - rich custard ice cream can only be improved by sharp raspberry sauce',
    price: 3.49,
    image: ripple_ice_cream,
  },

  {
    id: 10,
    name: 'Fruit Ice Cream',
    description: 'Refreshing ice cream made with real fruit',
    price: 3,
    image: fruit_ice_cream,
  },

  {
    id: 11,
    name: 'Jar Ice Cream',
    description: 'No ice cream machine? No problem! Mason jar ice cream is the easiest, fastest way to make the exact',
    price: 6,
    image: jar_ice_cream,
  },

  {
    id: 12,
    name:'Vanilla Ice Cream',
    description: 'Classic vanilla ice cream made with real vanilla beans',
    price: 9,
    image: vanilla_ice_cream,
  },

  {
    id: 13,
    name: 'Greek Salad',
    description: 'Fresh salad with cucumbers, tomatoes, olives, and feta cheese',
    price: 7.55,
    image: greek_salad,
  },

   {
    id:14,
    name: 'Veg Salad',
    description: 'Healthy salad with mixed greens, cherry tomatoes, and cucumbers',
    price: 5,
    image: veg_salad,
  },

  {
    id:15,
    name: 'Clover Salad',
    description: 'A fresh salad with clover leaves, cucumbers, and a light dressing',
    price: 10,
    image: clover_salad,
  },

  {
    id: 16,
    name: 'Chicken Salad',
    description: 'A hearty salad with grilled chicken, mixed greens, and a tangy dressing',
    price: 12,
    image: chicken_salad,
  },

  {
    id: 17,
    name: 'Chicken Sandwich',
    description: 'A delicious sandwich filled with grilled chicken and fresh vegetables',
    price: 8.20,
    image: chicken_sandwich,
  },

  {
    id: 18,
    name: 'Vegan Sandwich',
    description: 'The best veggie sandwich bursts with color, flavor, and texture. It\'s filling, refreshing, and perfect for any meal!',
    price: 7.50,
    image: vegan_sandwich,
  },

  {
    id: 19,
    name: 'Grilled Sandwich',
    description: 'Grilled sandwich are a popular street food all over the world. These Mumbai style grilled sandwiches',
    price: 8.50,
    image: grilled_sandwich,
  },

  {
    id: 20,
    name: 'Bread Sandwich',
    description: 'Made with all of the ingredients that make homemade white bread superior to storebought — butter',
    price: 6,
    image: bread_sandwich,
  },

  {
    id: 21,
    name: 'Cup Cake',
    description: 'A delicious cupcake with a rich frosting',
    price: 2.50,
    image: cup_cake,
  },

  {
    id: 22,
    name: 'Vegan Cake',
    description: 'Light fluffy and delicious vegan vanilla cake! Two layers of vanilla sponge, topped with a velvety vegan buttercream.',
    price: 10,
    image: vegan_cake,
  },

  {
    id: 23,
    name: 'ButterScotch Cake',
    description: 'A rich and creamy butter scotch cake',
    price: 11,
    image: butter_scotch_cake,
  },

  {
    id: 24,
    name: 'Sliced Cake',
    description: 'A delicious cake served in slices',
    price: 9,
    image: sliced_cake,
  },

  {
    id: 25,
    name: 'Butter Noodles',
    description: 'Buttered noodles are simple to make with your favorite pasta, butter, Parmesan cheese, salt, and pepper for a quick and easy, kid-friendly dish.',
    price: 8,
    image: butter_noodles,
  },

  {
    id: 26,
    name: 'Veg Noodles',
    description: 'Super quick & delicious veg noodles made with lots of fresh vegetables, tossed in a savory sauce.',
    price: 4,
    image: veg_noodles,
  },

  {
    id: 27,
    name: 'Somen Noodles',
    description: 'Delicate noodles served in a light broth',
    price: 5.20,
    image: somen_noodles,
  },

  {
    id: 28,
    name: 'Cooked Noodles',
    description: 'This version of soy sauce noodles, an iconic Cantonese dish commonly enjoyed for breakfast or lunch at dim sum, is hearty enough for dinner, too.',
    price: 8,
    image: cooked_noodles,
  },

  {
    id: 29,
    name: 'Cheese Pasta',
    description: 'This Cheese Pasta recipe has savory pasta smothered in the most delicious broccoli cheese sauce!',
    price: 12.50,
    image: cheese_pasta,
  },

  {
    id: 30,
    name: 'Tomato Pasta',
    description: 'Pasta with a rich tomato sauceAn easy and delicious Creamy Tomato Pasta. Tomatoes mixed with mascarpone cheese, salty pancetta, shallots and a pinch of chilli flakes for a little heat.',
    price: 13,
    image: tomato_pasta,
  },

  {
    id: 31,
    name: 'Creamy Pasta',
    description: 'Looking for creamy pasta? Look no further. This is the best, with garlic, cream, and Parmesan cheese.',
    price: 12,
    image: creamy_pasta,
  },

  {
    id: 32,
    name: 'Chicken Pasta',
    description: 'Creamy and delicious cheesy chicken pasta, with juicy chicken and a creamy yet lighter cheddar sauce.',
    price: 14,
    image: chicken_pasta,
  }
];