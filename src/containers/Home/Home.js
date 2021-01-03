import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchForecastByLocation } from '../../store/actions';
import SearchBar from '../../components/Home/SearchBar';
import ContentHeadLine from '../../components/Home/ContentHeadLine';
import useLocations from '../../hooks/useLocations';
import './Home.css';


const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// const formatIcon = ("0" + current.WeatherIcon).slice(-2);


const Home = props => {
    console.log(props.selectedLocation);

    const [location, search] = useLocations('');
    console.log(location);
    useEffect(() => {
        if (!props.selectedLocation) {
            props.fetchForecastByLocation('215854', 'tel aviv');

        }
    }, [])

    useEffect(() => {
        console.log("location", location);
        if (location?.Key) {

            props.fetchForecastByLocation(location.Key, location.LocalizedName);
        }

    }, [location])

    const renderForecast = () => {
        if (!props.selectedLocation) {
            return null;
        }

        return props.selectedLocation.days.DailyForecasts.map((day, i) => {
            return (

                <div key={i} className="box" >

                    <h2>{days[new Date(day.Date).getDay()]}</h2>
                    <div className="icon">
                    <img src={`https://developer.accuweather.com/sites/default/files/${("0" + day.Day.Icon).slice(-2)}-s.png`} alt="" />
                </div>
                    <p>Max: {day?.Temperature?.Maximum?.Value}&deg;</p>
                    <p>Min: {day?.Temperature?.Minimum?.Value}&deg;</p>


                </div>
            )
        })
    }

    return (
        <div className='Home'>
            <SearchBar onFormSubmit={search} />

            <div className="container">

                {
                    props.selectedLocation ?
                        <>

                            <ContentHeadLine
                                code={props.selectedLocation.code}
                                current={props.selectedLocation?.current}
                                title={props?.selectedLocation?.title.toUpperCase()}
                            />
                            <h1 >
                              {props.selectedLocation.current.WeatherText}  
                            </h1>
                            <div className="content">
                                {renderForecast()}
                            </div>
                        </>

                        : <h1>Data is not available</h1>
                }

            </div>
        </div>
    )
}
const mapStateToProps = (state,otherProps) => {
    return { selectedLocation: state.selectedLocation }
};
export default connect(mapStateToProps, { fetchForecastByLocation })(Home);