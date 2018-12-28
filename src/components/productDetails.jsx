import React from "react";
import ProductForm from "./productForm";

const ProductDetail = props => {
  const {
    productName,
    productPrice: price,
    productDescription: desc
  } = props.details;
  const list = desc
    .split(",")
    .map((list, i) => <li key={list + i}>-{list}</li>);
  return (
    <div className="ProductDetail">
      <h2>{productName}</h2>
      <p className="product-price">${price}</p>
      <h3>Description:</h3>
      <ul className="product-desc">{list}</ul>
      <ProductForm
        product={props.details}
        onOrder={props.onOrder}
        onOrderTotal={props.onOrderTotal}
      />
    </div>
  );
};

export default ProductDetail;
