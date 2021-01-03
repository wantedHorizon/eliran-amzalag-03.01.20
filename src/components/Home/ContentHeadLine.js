import React from 'react';
import { connect } from 'react-redux';
import './ContentHeadLine.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { addFavorite, removeFavorite } from '../../store/actions';
import { Button } from '@material-ui/core';

const ContentHeaderLine = ({ current, title, code, isFavorite, addFavorite, removeFavorite,isCelsius}) => {

    const degreeType = (deg) => {
        if(isCelsius){
            return deg;
        }

        return 2*deg+30;
    }

    const formatIcon = ("0" + current.WeatherIcon).slice(-2);
    return (
        <div className='ContentHeaderLine'>
            <div className="left">
                <div className="icon">
                    <img src={`https://developer.accuweather.com/sites/default/files/${formatIcon}-s.png`} alt="" />
                </div>
                <div className="title">
                    {title}
                    <br />
                    {degreeType(current.Temperature.Metric.Value)}&deg;
                </div>

            </div>
            <div className="right">
                <div style={{ marginRight: '10px',color:'red' }}>
                    {isFavorite ?
                       <Button  style={{ color:'red' }} onClick={() => removeFavorite(code)}> <FavoriteIcon  /> </Button>
                        : <Button  style={{ color:'red' }} onClick={() => addFavorite({ code, current, title })}> <FavoriteBorderIcon  /></Button>
                    }
                </div>
                {isFavorite ? <span>Remove From Favorites</span> : <span>Add To Favorites</span>}


            </div>
        </div>
    )
}


const mapStateToProps = (state, otherProps) => {
    const isFavorite = state.favorites.find(fav => fav.code === otherProps.code);
    const found = isFavorite ? true : false;
    return { otherProps, isFavorite: found,isCelsius:state.isCelsius  }
};
export default connect(mapStateToProps, { addFavorite, removeFavorite })(ContentHeaderLine);