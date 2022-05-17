import React from "react";

function Cart(props) {
  const { quantity = 0, handleBasket = Function.prototype } = props;

  return (
    <div className="cart">
      <i
        onClick={handleBasket}
        style={{ color: "#fff" }}
        className="material-icons"
      >
        shopping_cart
      </i>
      {quantity ? (
        <span style={{ backgroundColor: "#fff" }} className="cart-quantity">
          {quantity}
        </span>
      ) : null}
    </div>
  );
}

export default Cart;
