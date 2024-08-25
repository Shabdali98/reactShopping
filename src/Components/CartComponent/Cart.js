import React from "react";
import '../CartComponent/Cart.css'
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/actions/cartActions";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  // Calculate the total amount
  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
       <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty</p>
      ) : (
        <div>
          <div className="ui list">
            {cart.map((item) => (
              <div className="item" key={item.id}>
                <div className="image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="content">
                  <div className="header">{item.title}</div>
                  <div className="description">
                    ${item.price} x {item.quantity}
                  </div>
                  <button
                    className="ui button red"
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="ui segment">
            <h3 className="total-amount">Total Amount: ${totalAmount.toFixed(2)}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
