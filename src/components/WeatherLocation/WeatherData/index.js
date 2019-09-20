import React from 'react';

// PropTypes
import PropTypes from 'prop-types';

// Styles
import './styles.css';
import { Grid, Row, Col } from 'react-flexbox-grid';

// Components
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';

const WeatherData = ({data : {temperature, weatherState, humidity, wind}}) => {
    return (
        <React.Fragment>
        <div className="weather-data-cont">
            <Grid fluid>
                <Row>
                    <Col xs={12} sm={6} md={6}>
                        <WeatherTemperature 
                            temperature={temperature} 
                            weatherState={weatherState} 
                        />
                    </Col>
                    <Col xs={12} sm={6} md={6}>
                        <div className="extra-info-content">
                            <WeatherExtraInfo humidity={humidity} wind={wind} />
                        </div>
                    </Col>
                </Row>
            </Grid>        
        </div>
        </React.Fragment>
    );
};

WeatherData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired
    }).isRequired,
}

export default WeatherData;