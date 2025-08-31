import React from 'react';
import './FoodItem.css';
import rating from '/rate.jpg';

const FoodItem = ({id, name, description, price, image}) => {
  return (
    <div className="food-item">
        <div className="food-item-img-container">
            <img src={image} alt={name} className="food-item-image" />
        </div>
        <div className="food-list-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={rating} alt="Rating"/>
            </div>
            <p className="food-item-description">{description}</p>
            <p className="food-item-price">${price}</p>
        </div>
    </div>

  )
}
export default FoodItem;