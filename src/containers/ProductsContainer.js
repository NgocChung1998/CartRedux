import React, { Component } from "react";
import { connect } from "react-redux";
import Products from "../compunents/Products";
import Product from "./../compunents/Product";
import PropTypes from "prop-types";
import { actAddToCart} from './../actions/index'
class ProductsContainer extends Component {
  render() {
    var { products } = this.props;
    // console.log(products)
    return <Products>{this.showProducts(products)}</Products>;
  }
  showProducts(products) {
    var result = null;
    
    var {onAddToCart}=this.props;
    
    console.log(onAddToCart)
    if (products.length > 0) {
      result = products.map((product, index) => {
        return <Product key={index}
         product={product}
               onAddToCart={onAddToCart}
        />;
      });
    }
    // console.log(result);
    return result;
  }
}
ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired
    })
  ).isRequired
};
const mapStatetoProps = state => {
  return {
    products: state.products
  };
};
const mapDispatchToProps=(dispatch,props)=>{
  return {
    onAddToCart :(product)=>{
      dispatch(actAddToCart(product,1));
    }
  }
}
export default connect(mapStatetoProps,mapDispatchToProps)(ProductsContainer);
