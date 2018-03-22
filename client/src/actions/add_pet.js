import { ADD_PET } from './types'

export default function addPet(pet){
  return dispatch => {
    dispatch(addPetAsyn(pet))
  }
}

function addPetAsyn(pet){
  return {
    type: ADD_PET,
    payload: pet
  };
}
