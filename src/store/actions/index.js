// import jsonPlaceholder from '../apis/jsonPlaceholder';
import weatherAPI from '../../api/weatherAPI';
// export const fetchPosts = () => async dispatch => {
//   const response = await jsonPlaceholder.get('/posts');

//   dispatch({ type: 'FETCH_POSTS', payload: response });
// };

export const fetchForecastByLocation = (code) => async dispatch => {
  const data = await weatherAPI.get(`forecasts/v1/daily/5day/${code}`, {
    params: {
      metric:true
    }
  });

 if(data.status !== 200 ){
   return;
 }


  dispatch({ type: 'LOCATION_SELECTED', payload: data.data });
};



// export const fetchWeatherByCity = ()