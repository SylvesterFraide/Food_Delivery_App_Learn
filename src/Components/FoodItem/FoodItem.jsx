import React, { useContext } from "react";
import "./FoodItem.css";
import rating from "/rate.jpg";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import RemoveCircleTwoToneIcon from "@mui/icons-material/RemoveCircleTwoTone";
import AddCircleTwoToneIcon from "@mui/icons-material/AddCircleTwoTone";
import { StoreContext } from "../../Context/StoreContext";

const FoodItem = ({ id, name, description, price, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img src={image} alt={name} className="food-item-image" />
        {!cartItems[id] ? (
          <AddTwoToneIcon className="add" onClick={() => addToCart(id)} />
        ) : (
          <div className="food-item-counter">
            <RemoveCircleTwoToneIcon
              className="removeItem"
              onClick={() => removeFromCart(id)}
            />
            <span>{cartItems[id]}</span>
            <AddCircleTwoToneIcon
              className="addItem"
              onClick={() => addToCart(id)}
            />
          </div>
        )}
      </div>
      <div className="food-list-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={rating} alt="Rating" />
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};
export default FoodItem;
