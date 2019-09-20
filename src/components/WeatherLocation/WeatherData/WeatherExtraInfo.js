import React from 'react';

// PropTypes
import PropTypes from 'prop-types';

// Styles
import './styles.css';

const WeatherExtraInfo = ({humidity, wind}) => {
    return (
        <div className="container">
            <div>
                <span className="extra-info-text">{` Humedad: ${humidity} % `}</span>
                <span className="extra-info-text">{`Viento: ${wind}`}</span>
            </div>
        </div>
    );
};

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired
}

export default WeatherExtraInfo;