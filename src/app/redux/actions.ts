
export const SET_LOGIN_STATUS = 'SET_LOGIN_STATUS';
export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SET_PRODUCT = 'SET_PRODUCT';

export const setLoginStatus = status => {
  return {
    type: SET_LOGIN_STATUS,
    status
  }
}

export const setProducts = products =>  {
  return {
    type: SET_PRODUCTS,
    products
  }
}

export const setProduct = product =>  {
  return {
    type: SET_PRODUCT,
    product
  }
}
