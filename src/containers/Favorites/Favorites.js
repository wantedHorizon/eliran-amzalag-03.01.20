import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchForecastByLocation } from '../../store/actions';
import "./Favorites.css";


const Favorites = ({ favorites,fetchForecastByLocation }) => {
    let history = useHistory();
 
    const moveToHome = (location) => {
        fetchForecastByLocation(location.code,location.title);
        history.push('/');
    }

    console.log(favorites);
    return (
        <div className='Favorites'>
            <div className="content">

                {favorites.map(location => {
                    return (
                        <div key={location.title} className="box"
                        onClick={()=>moveToHome(location)}
                        >
                            <h1>{location.title.toUpperCase()}</h1>
                            <div className="icon">
                                <img src={`https://developer.accuweather.com/sites/default/files/${("0" + location.current.WeatherIcon).slice(-2)}-s.png`} alt="" />
                            </div>
                            <p> {location.current.Temperature.Metric.Value} &deg;</p>
                            <h3>{location.current.WeatherText}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { favorites: state.favorites }
};
export default connect(mapStateToProps, { fetchForecastByLocation })(Favorites);