import { ADD_FURNITURE } from './types'

export default function addFurniture(furniture){
  return dispatch => {
    dispatch(addFurnitureAsyn(furniture))
  }
}

function addFurnitureAsyn(furniture){
  return {
    type: ADD_FURNITURE,
    payload: furniture
  };
}
