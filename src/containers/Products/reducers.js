const initialState = {
  isLoading: false,
  products: []
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'IS_LOADING_PRODUCTS':
      return {
        ...state,
        isLoading: action.isLoading
      };

    case 'LOAD_PRODUCTS_FAIL':
      return {
        ...state,
        loadFailed: action.loadFailed
      };

    case 'LOAD_PRODUCTS_SUCCESS':
      return {
        ...state,
        products: action.products
      };

    default:
      return state;
  }
};

export default productReducer;
