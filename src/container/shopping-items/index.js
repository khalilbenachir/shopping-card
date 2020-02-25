import React from 'react'
import ShoppingItem from '../../component/shopping/shopping-item'

import { connect } from "react-redux";
import { purchaseProduct } from "../../redux/actions/shopping";


 function ShoppingItems(props) {
    return (
        <div className="shopping-items">
            {props.products.map((item,index)=> <ShoppingItem key={index} item={item} purchaseItem={()=>props.purchaseItem(item)} />)}
        
        </div>
    )
}



const mapStateToProps = state => ({
    products: state.shopping.products
  });
  
  const mapDispatchToProps = dispatch => {
    return {
      purchaseItem: (item) => dispatch(purchaseProduct(item))
    };
  };

  export default connect(
    mapStateToProps,mapDispatchToProps
  )(ShoppingItems);



  

