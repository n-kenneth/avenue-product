import React from "react";
import ProductForm from "./productForm";

const ProductDetail = props => {
  const {
    productName,
    productPrice: price,
    productDescription: desc
  } = props.details;
  return (
    <div className="ProductDetail">
      <h2>{productName}</h2>
      <p className="product-price">${price}</p>
      <p className="product-desc">{desc}</p>
      <ProductForm product={props.details} onOrder={props.onOrder} />
    </div>
  );
};

export default ProductDetail;
