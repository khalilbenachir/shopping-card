import shoppingTypes from "../types";

export const purchaseProduct = (item) => {
  return   {
    
      type: shoppingTypes.PURCHASE_PRODUCT,
      payload:item

  };
};
