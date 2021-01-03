import React, { useEffect } from 'react';
import api from '../api/weatherAPI';
import { connect } from 'react-redux';
import { fetchForecastByLocation } from '../store/actions';
import SearchBar from '../components/SearchBar';
import useLocations from '../hooks/useLocations';


const  days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];


const Home = props => {
    console.log(props.selectedLocation);

    const [location, search] = useLocations('');
    console.log(location);
    useEffect(() => {
        if(!props.selectedLocation){
            props.fetchForecastByLocation('215854');

        }
    }, [])

    useEffect(() => {
        console.log("location",location);
        if(location?.Key){

            props.fetchForecastByLocation(location.Key);
        }

    }, [location])

    const renderForecast = () => {
        if(!props.selectedLocation){
            return null;
        }

        return props.selectedLocation.DailyForecasts.map((day,i) => {
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
            <SearchBar onFormSubmit={search} />
            {renderForecast()}
        </div>
    )
}
const mapStateToProps = state => {
    return {selectedLocation:state.selectedLocation}
};
export default connect(mapStateToProps, {fetchForecastByLocation})(Home);