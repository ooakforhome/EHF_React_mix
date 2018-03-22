import { UPDATE_PRODUCT } from './types';

export default function updateProduct(product) {
  return dispatch => {
    dispatch(updateProductAsync(product));
  }
}

function updateProductAsync(product){
  return {
    type: UPDATE_PRODUCT,
    payload: product
  };
}
