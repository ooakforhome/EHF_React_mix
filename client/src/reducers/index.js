import { combineReducers } from 'redux';
import ProductList from './reducer_product_list';

const rootReducer = combineReducers({
  productList: ProductList
});

export default rootReducer;
