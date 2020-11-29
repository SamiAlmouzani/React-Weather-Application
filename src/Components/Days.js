import React from 'react';

function Days(){
    return (
        <div className='days-content'>
            <div className="day-name">
                <h3>Day</h3>
            </div>
            <div className="day-date">
                <h3>Date</h3>
            </div>
            <div className="day-icon">
                <i href="%PUBLIC_URL%/weather.ico"></i>
            </div>
            <div className="day-temp">
                <h3>Temp</h3>
            </div>
            <div className="day-description">
                <h3>Description</h3>
            </div>    
        </div>
    );
}

export default Days;