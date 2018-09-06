export function loadingProducts(bool) {
  return {
    type: 'IS_LOADING_PRODUCTS',
    isLoading: bool
  };
}

export function loadProductsFailed(bool) {
  return {
    type: 'LOAD_PRODUCTS_FAIL',
    loadFailed: bool
  };
}

export function loadProductsSuccess(response) {
  const products = response.products || [];
  return {
    type: 'LOAD_PRODUCTS_SUCCESS',
    products
  };
}

export function loadProducts(url) {
  return dispatch => {
    dispatch(loadingProducts(true));

    fetch(url)
      .then(response => {
        dispatch(loadingProducts(false));
        return response;
      })
      .then(response => response.json())
      .then(products => dispatch(loadProductsSuccess(products)))
      .catch(() => dispatch(loadProductsFailed(true)));
  };
}
