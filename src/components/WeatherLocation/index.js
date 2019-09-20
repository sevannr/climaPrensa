import React, {Component} from 'react';

// Proptypes
import PropTypes from 'prop-types';
 
// Redux
// import {store} from './store';
import {connect} from 'react-redux';
// Redux - actions
import {setCity} from './../../actions';

// Data
// Cities for exploring weather
import {cities} from './../../data/cities';

// Styles
import './style.css';
import CircularProgress from '@material-ui/core/CircularProgress';

// Components
import Location from './Location';
import WeatherData from './WeatherData';

// Services
import getWeather from '../../services/getUrlWeatherByCity';
import transforWeather from './../../services/transformWeather';


class WeatherLocation extends Component {
    constructor(props){
        super(props);

        const {city} = this.props; 

        // Initial State
        this.state = {
            city,
            data: null
        };
    }

    // Component did mount to charge Bucaramanga weather
    componentDidMount(){
        const apiWeather = getWeather(this.state.city);

        // Fetch promise to get current weather
        fetch(apiWeather).then( (resolve, rejected) => {
            return resolve.json();
        })
        .then(data => { 
            // In case of error
            if(data.cod !== 200){
                return null;
            }

            // Apply tranforms to new data
            let newData = transforWeather(data);
            
            this.setState({ 
                city: newData.city,
                data: newData.data
            });
        })
        .catch((err) => {
            console.log('Ocurrió un error inesperado.');
        });
    }

    handleUpdateClick = () =>{
        // Random with possible cities
        const random = (Math.random()*(cities.length -1)).toFixed();
        const location = cities[random];

        const apiWeather = getWeather(location);

        // Fetch promise to get current weather
        fetch(apiWeather).then( resolve => {
            return resolve.json();
        })
        .then(data => {
            // In case of error
            if(data.cod !== 200){
                return null;
            }
            
            // Apply tranforms to new data
            let newData = transforWeather(data);
            
            this.setState({ 
                city: newData.city,
                data: newData.data
            });
            
            // Redux - store
            this.props.setCity(this.state.city);
        })
        .catch((err) => {
            console.log('hubo error');
        });
    }

    showWeatherComponent = () => {
        const {city, data} = this.state;

        if(city && data){
            return(
                <React.Fragment>
                    <Location city={city} />
                    <WeatherData data={data} />
                    <div className="align-center">
                        <button className="btn green-background mt-2 align-center" onClick={this.handleUpdateClick}>Explorar</button>
                    </div>
                 </React.Fragment>
            );
        }

        return(<CircularProgress size={60} />); 
    }

    render() { 
        return (
            <div className="weather-location-cont">
                {this.showWeatherComponent()}
            </div>
        );
    }
}

// PropTypes
WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    setCity: PropTypes.func.isRequired
}

// Connect
const mapDispatchToProps = dispatch => ({
  setCity: value => dispatch(setCity(value))
});
 
export default connect(null, mapDispatchToProps)(WeatherLocation);