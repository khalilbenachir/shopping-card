import shoppingTypes from "../types";

const INITIAL_STATE = {
  products: [
    { name: "product-1", price: 22, imgeUrl: "../../../img/test1.jpg", id: 1 },
    { name: "product-2", price: 22, imgeUrl: "../../../img/test2.jpg", id: 2 },
    { name: "product-3", price: 22, imgeUrl: "../../../img/test3.jpg", id: 3 },
    { name: "product-4", price: 22, imgeUrl: "../../../img/test4.jpg", id: 4 },
    { name: "product-5", price: 22, imgeUrl: "../../../img/test5.jpg", id: 5 },
    { name: "product-6", price: 22, imgeUrl: "../../../img/test6.jpg", id: 6 }
  ],
  total: 0,
  productPurchased: 0
};

const shoppingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shoppingTypes.PURCHASE_PRODUCT:
      return {
        ...state,
        total:state.total+action.payload.price,
        productPurchased:state.productPurchased+1
      };
    default:
      return state;
  }
};

export default shoppingReducer;
