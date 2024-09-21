import { ADD_PRODUCT, DELETE_PRODUCT } from './cart.actions';

const initState = {
  products: [],
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: state.products.concat(action.payload.productData),
      };
    case DELETE_PRODUCT:
      const newList = state.products.filter(product => product.id !== action.payload.productId);
      return {
        ...state,
        products: newList,
      };
    default:
      return state;
  }
};

export default cartReducer;
