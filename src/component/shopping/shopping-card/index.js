import React from "react";
import "./style.css";
import {connect} from 'react-redux'

function ShoppingCard(props) {
  return (
    <div className="container-basket">
      <h1>Basket</h1>
      <div className="basket">
  <h2>Total :<span>${props.total}</span></h2>
  <h3>Numver of items : <span>{props.productPurchased}</span></h3>
      </div>
    </div>
  );
}



const mapStateToProps = state => ({
    total: state.shopping.total,
    productPurchased:state.shopping.productPurchased
  });
  
  export default connect(
    mapStateToProps
  )(ShoppingCard);