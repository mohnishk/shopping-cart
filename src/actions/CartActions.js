import * as types from '../constants/CartActionTypes';
import photoSearch from '../api/Getcartitems';

function getAllTheProducts( dispatch) {

  console.log('14')
  photoSearch( (data) => {
    dispatch({
      type: types.SEARCH_DONE,
      photos: data,

    });
  });
}

export function searchNextPageAction(item) {
  return (dispatch, getState) =>{
    const page = getState().photos.page + 1;
    const keyword = getState().photos.keyword;
    searchWithPhotoAPI(keyword, page, dispatch);
  };
}

export function selectproduct(item) {
  return (dispatch, getState) => {
    let selectedAr = getState().photos.selecteditems
    item.selectedCount = 1
    selectedAr.push(item);
    dispatch({
      type: types.ADD_TO_CART,
      selected: selectedAr,

    });
  }
}
export function incrementItems(index, type) {
  return (dispatch, getState) => {
    let selectedAr = getState().photos.selecteditems
    if(type == 'inc') {
      selectedAr[index].selectedCount += 1;
    }else{
      selectedAr[index].selectedCount -= 1;
    }
    dispatch({
      type: types.INCR_ITEM,
      selected: selectedAr,

    });
  }
}
export function emptyCart(){
  return (dispatch, getState) => {
    dispatch({
      type: types.DEL_ALL,
      selected: [],

    });
  }
}
export function deletecartItem(i){
  return (dispatch, getState) => {
    let selectedAr = getState().photos.selecteditems
    selectedAr.splice(i,1);
    dispatch({
      type: types.DEL_ITEM,
      selected: selectedAr,

    });
  }
}
export function getcartproducts() {
  return (dispatch) => {
    getAllTheProducts( dispatch);
  };
}
