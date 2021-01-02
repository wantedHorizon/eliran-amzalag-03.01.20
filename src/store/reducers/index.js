import { combineReducers } from 'redux';


const favoritesReducer = (favorites=[],action) => {
  if(action.type === 'FAVORITES_ADD'){
    return [...favorites, action.payload];
  }
  if(action.type === 'FAVORITES_REMOVE'){
    return favorites;
  }

  return favorites;
};

const selectedLocation = (selectedLocation = null, action) => {
  if (action.type === 'LOCATION_SELECTED') {
    return action.payload;
  }

  return selectedLocation;
};

export default combineReducers({
  favorites: favoritesReducer,
  selectedLocation
});
