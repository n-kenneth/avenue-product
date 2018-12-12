import React from "react";
import ProductImage from "./productImage";
import ProductDetail from "./productDetails";

const Product = props => {
  return (
    <div className="container Product">
      <ProductImage image={props.products.productImage} />
      <ProductDetail details={props.products} onOrder={props.onOrder} />
    </div>
  );
};

export default Product;
