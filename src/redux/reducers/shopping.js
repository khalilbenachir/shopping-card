import shoppingTypes from "../types";

const INITIAL_STATE = {
  products: [
    { name: "product-1", price: 22, id: 1 },
    { name: "product-2", price: 42, id: 2 },
    { name: "product-3", price: 33, id: 3 },
    { name: "product-4", price: 10, id: 4 },
    { name: "product-5", price: 17, id: 5 },
    { name: "product-6", price: 45, id: 6 }
  ],
  total: 0,
  productPurchased: 0
};

const shoppingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shoppingTypes.PURCHASE_PRODUCT:
      return {
        ...state,
        total: state.total + action.payload.price,
        productPurchased: state.productPurchased + 1
      };
    default:
      return state;
  }
};

export default shoppingReducer;
