import React, { useContext } from 'react'
import './Cart.css';
import { StoreContext } from '../../Context/StoreContext';
import CloseIcon from "@mui/icons-material/Close";

const Cart = () => {

   const {cartItems, removeFromCart, Food_List} = useContext(StoreContext);

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {
          Food_List.map((item, index) => {
            if(cartItems[item.id] > 0) {
              return (
                <div className="cart-items-title">
                  <img src={item.image} alt='' />
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <p>{cartItems[item.id]}</p>
                  <p>{item.price * cartItems[item.id]}</p>
                  <CloseIcon />
                  {/* <button onClick={() => removeFromCart(item.id)}>Remove</button> */}
                </div>
              )
            }
          })
        }

      </div>
    </div>
  )
}

export default Cart;