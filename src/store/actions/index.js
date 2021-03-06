import weatherAPI from '../../api/weatherAPI';


export const fetchForecastByLocation = (code,title) => async dispatch => {
  try {
    dispatch({type:'LOADING',payload:false});
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
  }catch(e){
    console.log(e);
  }finally{
    dispatch({type:'LOADING',payload:true});

  }
  
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

export const degreeSwitch = (isCel) => {
  return {
    type:'DEGREE_TYPE_SWITCH',
    payload: isCel
  }
}


