import { FETCH_PRODUCTS, NEW_POST} from './types';
import axios from 'axios';

export const fetchProducts = () => dispatch => {
  axios.get('/api/products')
    .then(res => res.data)
    .then(posts =>
    dispatch({
      type: FETCH_PRODUCTS,
      payload: posts
    })
  );
};

export const createPost = postData => dispatch => {
  axios.post("/api/products", postData)
    .then(res => res.data)
    .then(post =>
      dispatch({
        type: NEW_POST,
        payload: post
      })
    );
};


// =====FETCH FORMAT=======
// import { FETCH_PRODUCTS } from './types';
//
// export const fetchProducts = () => dispatch => {
//   fetch('/api/products')
//     .then(res => res.json())
//     .then(posts =>
//     dispatch({
//       type: FETCH_PRODUCTS,
//       payload: posts
//     })
//   );
// };
