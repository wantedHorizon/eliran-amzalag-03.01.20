import React, { useEffect } from 'react';
import api from '../api/weatherAPI';
import { connect } from 'react-redux';
import { fetchForecastByLocation } from '../store/actions';

const  days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];


const Home = props => {
    console.log(props.selectedLocation);
    useEffect(() => {
        if(!props.selectedLocation){
            props.fetchForecastByLocation('215854');

        }
    }, [])

    const renderForecast = () => {
        if(!props.selectedLocation){
            return null;
        }

        return props.selectedLocation.DailyForecasts.map((day,i) => {
            console.log(day);
            return (
                <div key={i}>
                    
                    <h2>{ days[ new Date(day.Date).getDay()]}</h2>
                    <p>Max:{day?.Temperature?.Maximum?.Value}</p>
                    <p>Min:{day?.Temperature?.Minimum?.Value}</p>


                </div>
            )
        })
    }

    return (
        <div className='Home'>
            {renderForecast()}
        </div>
    )
}
const mapStateToProps = state => {
    return {selectedLocation:state.selectedLocation}
};
export default connect(mapStateToProps, {fetchForecastByLocation})(Home);