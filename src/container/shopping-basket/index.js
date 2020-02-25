import React from 'react'
import ShoppingCard from '../../component/shopping/shopping-card'
import {connect} from 'react-redux'

 function ShoppingBasket(props) {
    return (
        <div className="shopping-basket">
            <ShoppingCard total={props.total} productPurchased={props.productPurchased} />
        </div>
    )
}



const mapStateToProps = state => ({
    total: state.shopping.total,
    productPurchased:state.shopping.productPurchased
  });
  
  export default connect(
    mapStateToProps
  )(ShoppingBasket);