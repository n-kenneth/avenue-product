import React from "react";
import ProductImage from "./productImage";
import ProductDetail from "./productDetails";

const Product = props => {
  const { products, onOrder, onOrderTotal } = props;
  return (
    <div className="container Product">
      <ProductImage image={products.productImage} />
      <ProductDetail
        details={products}
        onOrder={onOrder}
        onOrderTotal={onOrderTotal}
      />
    </div>
  );
};

export default Product;
