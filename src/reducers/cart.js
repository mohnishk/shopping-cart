import * as types from '../constants/CartActionTypes';

const initialState = {
  photos: [],
  selecteditems: [],
};

export default function searchPhotos(state = initialState, action) {
  switch (action.type) {
  case types.SEARCH_DONE:
    return {
      ...state,
      photos: [...state.photos, ...action.photos]
    };
    case types.ADD_TO_CART:
        console.log(action, state)
          return {
            ...state,
         //   photos: [...state.photos.selecteditems, ...action.selected]
            selecteditems:[...action.selected]
          };
    case types.INCR_ITEM:
      console.log(action)
      return {
        ...state,
        selecteditems:[...action.selected]
      };
    case types.DEL_ITEM:
        console.log(action)
      return {
        ...state,
        selecteditems:[...action.selected]
      };
    case types.DEL_ALL:
      console.log(action)
      return {
        ...state,
        selecteditems:[...action.selected]
      };
  default:
    return state;
  }
}
