import React from "react";
import Cart from "./cart";

const Navbar = props => {
  return (
    <header>
      <div className="container">
        <h1>
          <span>A</span>VENUE <span>F</span>ASHION
        </h1>
        <Cart
          orders={props.orders}
          toggleCart={props.toggleCart}
          onToggleCart={props.onToggleCart}
        />
      </div>
    </header>
  );
};

export default Navbar;
