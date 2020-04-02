import React ,{ Component } from 'react';
import Product from './Product'
// import {connect} from 'react-redux'
class Products extends Component {
  render(){
    var {products} = this.props;
  return (
    <section className="section">
        <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
        <div className="row">
          {/* {this.showProducts(products)} */}
          {this.props.children}
         
        </div>
      </section>
      
  );
}
// showProducts(products){
//   var result =null;
//   if(products.length>0){
//     result=products.map((product,index) =>{
//   return <Product key={index} product={product}/>
//     });
//   }
//   console.log(result)
//   return result;
// }
}

// const mapStatetoProps =state=>{
//   return{
//     products:state.products
//   }
// }
export default Products;
