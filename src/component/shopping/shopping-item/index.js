import React from "react";
import "./style.css";
import { Button } from "antd";

export default function ShoppingItem({item,purchaseItem}) {
  const { name, price,id} = item;

  return (
    <div className="card">
      <picture>
        <img src={require(`../../../img/test-${id}.jpg`)} alt="item-1" />
      </picture>
      <h2>{name}</h2>
      <h3>${price}</h3>
      <Button
        type="primary"
        shape="circle"
        icon="plus"
        onClick={purchaseItem}
      />
    </div>
  );
}

