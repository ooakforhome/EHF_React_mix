import {
  ADD_PET
} from '../actions/types'

export default function(state=[], action){

  switch (action.type){
    case ADD_PET:
      return [...state, action.payload];

    default:
      return state;
  }

}
