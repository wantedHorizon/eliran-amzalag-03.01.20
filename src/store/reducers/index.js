import { combineReducers } from 'redux';


const favoritesReducer = (favorites=[],action) => {

  const fav =JSON.parse(localStorage.getItem('favorites'));
  if(fav){
    favorites=fav;
  }
  
  if(action.type === 'FAVORITES_ADD'){
    const newFav= [...favorites, action.payload];
    localStorage.setItem('favorites',JSON.stringify(newFav));
    return newFav;
  }
  if(action.type === 'FAVORITES_REMOVE'){
    const newFav= favorites.filter(f=> f.code !== action.payload);
    localStorage.setItem('favorites',JSON.stringify(newFav));
    return newFav;
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
