import React, { Component } from "react";
import Navbar from "./components/common/navbar";
import Product from "./components/product";
import data from "./services/products.json";

class App extends Component {
  state = {
    products: data,
    orders: [],
    toggleCart: false
  };

  handleOrder = product => {
    const orders = [...this.state.orders];
    const index = orders.findIndex(order => order.sizes === product.sizes);
    if (index < 0) {
      product.quantity = 1;
      orders.push(product);
    } else {
      orders[index].quantity++;
    }
    this.setState({ orders });
  };

  handleToggleCart = () => {
    if (this.state.orders.length > 0)
      this.setState({ toggleCart: !this.state.toggleCart });
  };

  render() {
    return (
      <div className="App">
        <Navbar
          orders={this.state.orders}
          toggleCart={this.state.toggleCart}
          onToggleCart={this.handleToggleCart}
        />
        <Product products={this.state.products} onOrder={this.handleOrder} />
      </div>
    );
  }
}

export default App;
