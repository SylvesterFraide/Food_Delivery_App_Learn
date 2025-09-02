import React from "react";
import "./ExploreMenu.css";
import { MenuList } from "./Menu";

const ExploreMenu = ({ heading, par, category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>{heading}</h1>
      <p className="explore-menu-text">{par}</p>
      <div className="explore-menu-list">
        {MenuList.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) => ((prev) === item.name ? "All" : item.name))
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.name ? "active" : ""}
                src={item.image}
                alt={item.name}
              />
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
