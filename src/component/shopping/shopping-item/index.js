import React from "react";
import "./style.css";
import imgeUrl from "../../../img/test-1.jpg";
import { connect } from "react-redux";
import { purchaseProduct } from "../../../redux/actions/shopping";

import { Button } from "antd";

function ShoppingItem({item,purchaseItem}) {
  const { name, price } = item;

  return (
    <div className="card">
      <picture>
        <img src={imgeUrl} alt="item-1" />
      </picture>
      <h2>{name}</h2>
      <h3>${price}</h3>
      <Button
        type="primary"
        shape="circle"
        icon="plus"
        onClick={() => purchaseItem(item)}
      />
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    purchaseItem: (item) => dispatch(purchaseProduct(item))
  };
};
export default connect(null, mapDispatchToProps)(ShoppingItem);
