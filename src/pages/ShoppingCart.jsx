import { useState, useEffect } from "react";
import "../App.css";

function ShoppingCart({ item, setCartItem }) {
  const total = item.reduce((acc, item) => acc + parseFloat(item.price), 0);

  const deleteCat = (itemId) => {
    const filteredItem = item.filter((item) => {
      return item.id !== itemId;
    });
    setCartItem(filteredItem);
  };

  return (
    <div className="shoppingCart">
      <div className="shopping-info">
        <h1 className="cart-h1">Shopping cart💸</h1>
        {item.map((item) => (
          <div key={item.id} className="cart-container">
            <div>
              <h3>You are buying:</h3>
              <h4>
                {" "}
                👉🏼{item.name}, a <em>{item.breed}</em> that costs{" "}
                <strong>{item.price}</strong>${" "}
                <img
                  src={item.url}
                  style={{ width: "90px" }}
                  className="cart-image"
                />
              </h4>
              <button
                className="delete-button"
                onClick={() => deleteCat(item.id)}
              >
                🗑️
              </button>
              <hr/>
            </div>
          </div>
        ))}
      </div>

      <div className="payment">
        
        <h3><strong>Total price: {total}$</strong></h3>
        <h4>Enter your payment details:</h4>
        <label>
          Your PayPal account: <br/>
          <input type="text" /> 
        </label><br/>
        <button
          onClick={() =>
            alert("Payment successful! Your new friend is packing his little suitcase right now🎒")
          }
        >
          Pay
        </button>
      </div>
    </div>
  );
}
export default ShoppingCart;
