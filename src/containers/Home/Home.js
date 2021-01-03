import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchForecastByLocation } from '../../store/actions';
import SearchBar from '../../components/Home/SearchBar';
import ContentHeadLine from '../../components/Home/ContentHeadLine';
import useLocations from '../../hooks/useLocations';
import './Home.css';
import { Button, CircularProgress } from '@material-ui/core';
import weatherAPI from '../../api/weatherAPI';


const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


const Home = ({ fetchForecastByLocation, selectedLocation, isCelsius,loading }) => {
    const degreeType = (deg) => {
        if (isCelsius) {
            return deg;
        }

        return 2 * deg + 30;
    }

    const [location, search] = useLocations('');

    useEffect(() => {
        if (!selectedLocation) {
            fetchForecastByLocation('215854', 'tel aviv');

        }
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        if (location?.Key) {

            fetchForecastByLocation(location.Key, location.LocalizedName);
        }
        // eslint-disable-next-line
    }, [location])

    const renderForecast = () => {
        if (!selectedLocation) {
            return null;
        }

        return selectedLocation.days.DailyForecasts.map((day, i) => {
            return (

                <div key={i} className="box" >

                    <h2>{days[new Date(day.Date).getDay()]}</h2>
                    <div className="icon">
                        <img src={`https://developer.accuweather.com/sites/default/files/${("0" + day.Day.Icon).slice(-2)}-s.png`} alt="" />
                    </div>
                    <p>Max: {degreeType(day?.Temperature?.Maximum?.Value)}&deg;</p>
                    <p>Min: {degreeType(day?.Temperature?.Minimum?.Value)}&deg;</p>
                </div>
            )
        })
    }


    const getGEOLocation = () => {
        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };

        async function success(pos) {
            const { latitude, longitude } = pos.coords;
            const res = await weatherAPI.get('locations/v1/cities/geoposition/search', {
                params: {
                    q: `${latitude},${longitude}`
                }
            })

            fetchForecastByLocation(res.data.Key, res.data.LocalizedName);
        }
        function error(err) {

            alert('Please  confirm location and refresh \n or search for a city ')
        }
        return navigator.geolocation.getCurrentPosition(success, error, options);
    }


    return (
        <div className='Home'>
            <SearchBar onFormSubmit={search} />
            {loading? 
            <div className="container">

                {
                    selectedLocation ?
                        <>

                            <ContentHeadLine
                                code={selectedLocation.code}
                                current={selectedLocation?.current}
                                title={selectedLocation?.title.toUpperCase()}
                            />
                            <Button onClick={getGEOLocation}>Search By My Location</Button>

                            <h1 >
                                {selectedLocation.current.WeatherText}
                            </h1>
                            <div className="content">
                                {renderForecast()}
                            </div>

                        </>

                        : <h1>Data is not available</h1>
                }

            </div>

            :<CircularProgress size={120} /> }
        </div>
    )
}
const mapStateToProps = (state, otherProps) => {
    return { selectedLocation: state.selectedLocation, isCelsius: state.isCelsius,loading:state.loading }
};
export default connect(mapStateToProps, { fetchForecastByLocation })(Home);