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
                  <p className="summary-control">
                    <button onClick={() => props.onDecrementOrder(order)}>
                      <i className="fa fa-minus" />
                    </button>
                    <span>{parseFloat(quantity)} </span>
                    <button onClick={() => props.onIncrementOrder(order)}>
                      <i className="fa fa-plus" />
                    </button>
                  </p>
                  <p>${parseFloat(price)}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="summary-total">${props.orderTotal.toFixed(2)}</div>
      </div>
    );
  } else {
    summary = null;
  }

  return (
    <div className="Cart">
      <div className="cart-icon" onClick={props.onToggleCart}>
        {count !== 0 ? <span>{count}</span> : null}
        <i className="fa fa-shopping-cart" />
      </div>
      {props.toggleCart ? summary : null}
    </div>
  );
};

export default Cart;
