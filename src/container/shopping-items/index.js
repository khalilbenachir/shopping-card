import React from 'react'
import ShoppingItem from '../../component/shopping/shopping-item'

import { connect } from "react-redux";


 function ShoppingItems(props) {
    return (
        <div className="shopping-items">
            {props.products.map((item,index)=> <ShoppingItem key={index} item={item} />)}
        
        </div>
    )
}



const mapStateToProps = state => ({
    products: state.shopping.products
  });
  
  export default connect(
    mapStateToProps
  )(ShoppingItems);