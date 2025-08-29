import React, { useState } from "react";
import "./Home.css";
import Header from "../../Components/Header/Header";
import ExploreMenu from "../../Components/ExploreMenu/ExploreMenu";

const Home = () => {

  const [category, setCategory] = useState('All')
  return (
    <>
      <Header />
      <ExploreMenu
        category={category}
        setCategory={setCategory}
        heading="Explore our menu"
        par="Choose from a diverse menu featuring a delectable array off dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisy your cravings and elevate your dining experience."
      />
    </>
  );
};

export default Home;