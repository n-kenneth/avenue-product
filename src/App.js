import React, { Component } from "react";
import Navbar from "./components/common/navbar";
import Product from "./components/product";
import Modal from "./components/common/modal";
import data from "./services/products.json";

class App extends Component {
  state = {
    products: data,
    orders: [],
    orderTotal: 0,
    toggleCart: false
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.orders !== prevState.orders) this.handleOrderTotal();
  }

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
    if (this.state.orders.length > 0) {
      this.setState({ toggleCart: !this.state.toggleCart });
    }
  };

  handleOrderTotal = () => {
    let total = 0;
    const orders = [...this.state.orders];
    orders.map(order => (total += order.productPrice * order.quantity));
    this.setState({ orderTotal: total });
  };

  handleIncremenetOrder = selectedOrder => {
    const orders = [...this.state.orders];
    const index = orders.findIndex(
      order => order.sizes === selectedOrder.sizes
    );
    orders[index].quantity++;
    this.setState({ orders });
  };

  handleDecrementOrder = selectedOrder => {
    const orders = [...this.state.orders];
    const index = orders.findIndex(
      order => order.sizes === selectedOrder.sizes
    );
    if (orders[index].quantity > 1) {
      orders[index].quantity--;
      this.setState({ orders });
    } else {
      this.setState({ disableDecrement: true });
    }
  };

  render() {
    const {
      orders,
      orderTotal,
      disableDecrement,
      toggleCart,
      products
    } = this.state;

    let showModal = disableDecrement ? <Modal /> : null;

    return (
      <div className="App">
        <Navbar
          orders={orders}
          orderTotal={orderTotal}
          toggleCart={toggleCart}
          showModal={disableDecrement}
          onToggleCart={this.handleToggleCart}
          onIncrementOrder={this.handleIncremenetOrder}
          onDecrementOrder={this.handleDecrementOrder}
        />
        <Product
          products={products}
          onOrder={this.handleOrder}
          onOrderTotal={this.handleOrderTotal}
        />
        {showModal}
      </div>
    );
  }
}

export default App;
