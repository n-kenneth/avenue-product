import React, { Component } from "react";

class ProductForm extends Component {
  state = {
    selectedSize: this.props.product.sizes[0]
  };

  handleSize = size => {
    this.setState({ selectedSize: size });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { product, onOrder } = this.props;
    const newproduct = {
      ...product,
      sizes: this.state.selectedSize
    };
    onOrder(newproduct);
  };

  render() {
    const { sizes } = this.props.product;
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {sizes.map((size, i) => {
            return (
              <li key={size + i}>
                <input
                  type="radio"
                  name="productSize"
                  value={size}
                  id={size}
                  onChange={() => this.handleSize(size)}
                  checked={this.state.selectedSize === size ? "checked" : ""}
                />
                <label htmlFor={size}>{size}</label>
              </li>
            );
          })}
        </ul>
        <button>
          <i className="fa fa-shopping-cart" /> Add to cart
        </button>
      </form>
    );
  }
}

export default ProductForm;
