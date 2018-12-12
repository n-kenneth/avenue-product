import React from "react";

const Cart = props => {
  const count = props.orders.reduce((acc, order) => (acc += order.quantity), 0);
  let summary;
  if (props.orders.length > 0) {
    summary = (
      <div className="summary">
        <div className="summary-inner">
          {props.orders.map(order => {
            const {
              productName: name,
              productPrice: price,
              sizes: size,
              productImage: image,
              quantity
            } = order;
            return (
              <div className="summary-item" key={name + size}>
                <img src={image} alt={name} />
                <div className="summary-details">
                  <h4>{name}</h4>
                  <p>Size: {size}</p>
                  <p>
                    {parseFloat(quantity)} x {parseFloat(price)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    summary = null;
  }

  return (
    <div className="Cart" onClick={props.onToggleCart}>
      {count !== 0 ? <span>{count}</span> : null}
      <i className="fa fa-shopping-cart" />
      {props.toggleCart ? summary : null}
    </div>
  );
};

export default Cart;
