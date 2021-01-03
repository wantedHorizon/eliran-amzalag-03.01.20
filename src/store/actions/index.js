// import jsonPlaceholder from '../apis/jsonPlaceholder';
import weatherAPI from '../../api/weatherAPI';
// export const fetchPosts = () => async dispatch => {
//   const response = await jsonPlaceholder.get('/posts');

//   dispatch({ type: 'FETCH_POSTS', payload: response });
// };

export const fetchForecastByLocation = (code,title) => async dispatch => {
  const data = await weatherAPI.get(`/forecasts/v1/daily/5day/${code}`, {
    params: {
      metric:true
    }
  });

  const current = await weatherAPI.get(`/currentconditions/v1/${code}`);

 if(data.status !== 200 || current.status !== 200 ){
   return;
 }

  dispatch({ type: 'LOCATION_SELECTED', payload: {
    title,
    code,
    days:data.data,
    current:current.data[0]
  } });
};

export const addFavorite = (favorite) =>{
  return {
    type:'FAVORITES_ADD',
    payload:favorite
  }
}

export const removeFavorite = (code) =>{
  return {
    type:'FAVORITES_REMOVE',
    payload: code
  }
}


// export const fetchWeatherByCity = ()