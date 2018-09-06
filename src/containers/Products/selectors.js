const isLoading = state => {
  return state.products ? state.products.isLoading : false;
};

const getProducts = state => {
  return state.products ? state.products.products : [];
};

const loadFailed = state => {
  return state.products ? state.products.loadFailed : false;
};

export { isLoading, loadFailed, getProducts };
