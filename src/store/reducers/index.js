import { combineReducers } from 'redux';


const favoritesReducer = (favorites=[],action) => {

  if(action.type === 'FAVORITES_ADD'){
    return [...favorites, action.payload];
  }
  if(action.type === 'FAVORITES_REMOVE'){
    return favorites.filter(f=> f.code !== action.payload);
  }
  return favorites;
};

const selectedLocation = (selectedLocation = null, action) => {
  if (action.type === 'LOCATION_SELECTED') {
    return action.payload;
  }

  return selectedLocation;
};

const isCelsius = (isCel=true,action) => {
  if(action.type ==='DEGREE_TYPE_SWITCH') {
    return action.payload;
  }
  return isCel
}

export default combineReducers({
  favorites: favoritesReducer,
  selectedLocation,
  isCelsius
});
