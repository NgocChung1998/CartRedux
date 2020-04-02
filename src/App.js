import React, { Component } from "react";
import Header from "./compunents/Header";
import ProductsContainer from "./containers/ProductsContainer";
import Message from "./compunents/Message";
import CartContainer from "./containers/CartContainer";
import Footer from "./compunents/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main id="mainContainer">
          <div className="container">
            <ProductsContainer />
            <Message />
            <CartContainer />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}
export default App;
