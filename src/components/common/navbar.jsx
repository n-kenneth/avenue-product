import React from "react";
import Cart from "./cart";

const Navbar = props => {
  const {
    orders,
    orderTotal,
    onIncrementOrder,
    onDecrementOrder,
    toggleCart,
    onToggleCart
  } = props;

  return (
    <header>
      <div className="container">
        <h1>
          <span>A</span>VENUE <span>F</span>ASHION
        </h1>
        <Cart
          orders={orders}
          orderTotal={orderTotal}
          toggleCart={toggleCart}
          onToggleCart={onToggleCart}
          onIncrementOrder={onIncrementOrder}
          onDecrementOrder={onDecrementOrder}
        />
      </div>
    </header>
  );
};

export default Navbar;
