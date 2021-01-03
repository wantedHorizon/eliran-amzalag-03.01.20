import React from 'react';
import './ContentHeadLine.css';

const ContentHeaderLine = ({current,title}) => {
    console.log(current);

    const formatIcon = ("0" + current.WeatherIcon).slice(-2);
return (
<div className='ContentHeaderLine'>
 <div className="left">
    <div className="icon">
        <img src={`https://developer.accuweather.com/sites/default/files/${formatIcon}-s.png`} alt=""/>
    </div>
    <div className="title">
        {title}
        <br/>
        {current.Temperature.Metric.Value}
    </div>

 </div>
 <div className="right"></div>
</div>
)
}
export default ContentHeaderLine;