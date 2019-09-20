import React from 'react';

// PropTypes
import PropTypes from 'prop-types';

// Constants
import { CLOUD, SUN, RAIN, SNOW, FOG, THUNDER, DRIZZLE } from './../../../constants/weather';

// Styles
import './styles.css';
// import { Grid, Row, Col } from 'react-flexbox-grid';

// Icons
import WeatherIcons from 'react-weathericons';

// Icons dictionary
const icons = {
    [SUN]: "day-sunny",
    [FOG]: "day-fog",
    [CLOUD]: "cloud",
    // [CLOUDY]: "cloudy",
    [RAIN]: "rain",
    // [WINDY]: "windy",
    [SNOW]: "snow",
    [THUNDER]: "day-thunderstorm",
    [DRIZZLE]: "day-showers"
}

// Get current weather icon
const getWeatherIcon = weatherState => {
    let icon = icons[weatherState];

    // If icon is null or empty, return default icon
    if(!icon){
        icon = icons['sun'];
    }

    return(
        <WeatherIcons name={`${icon}`} className="wicon" />
    );
}

const WeatherTemperature = ({temperature, weatherState}) => {
    return (
        <React.Fragment>
            {/* <Grid fluid>
                <Row>
                    <Col xs={12} sm={6} md={6}> */}
                        <span className="temperature">{` ${temperature} `}</span>
                        <span className="temperatureType">{`°C `}</span>
                        <span>{ getWeatherIcon(weatherState) }</span>
                    {/* </Col>
                </Row>
            </Grid>         */}
        </React.Fragment>
    );
};

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
}

export default WeatherTemperature;