import React, { Component } from "react";

class ProductForm extends Component {
  state = {
    errorMessage: null
  };

  handleSize = size => {
    this.setState({ selectedSize: size });
  };

  handleSubmit = event => {
    event.preventDefault();
    const selectedSize = event.currentTarget.productSize.value;
    if (selectedSize) {
      const { product, onOrder } = this.props;
      const newproduct = { ...product, sizes: selectedSize };
      onOrder(newproduct);
      this.setState({ errorMessage: null });
    } else {
      this.setState({
        errorMessage: (
          <p className="error-message">
            select a size<sup>*</sup>
          </p>
        )
      });
    }
  };

  render() {
    const { sizes } = this.props.product;
    return (
      <form onSubmit={this.handleSubmit}>
        {this.state.errorMessage}
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
                />
                <label htmlFor={size}>{size}</label>
              </li>
            );
          })}
        </ul>
        <button onClick={this.props.onOrderTotal}>
          <i className="fa fa-shopping-cart" /> Add to cart
        </button>
      </form>
    );
  }
}

export default ProductForm;
