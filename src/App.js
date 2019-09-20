import React from 'react';

// PropTypes
// import PropTypes from 'prop-types';

// Redux
import {connect} from 'react-redux';
// Redux - Actions
// import {setCity} from './actions';

// Styles
import './App.css';
// import Paper from '@material-ui/core/Paper';
// import AppBar from '@material-ui/core/AppBar';
// import Typography from '@material-ui/core/Typography';
// import Toolbar from '@material-ui/core/Toolbar';

// Constants 
import {INITIALCITY} from './constants/weather';

// Components
import WeatherLocation from './components/WeatherLocation';

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <WeatherLocation city={INITIALCITY} />
      </div>
    </div>
  );
}

export default connect(null, null)(App);
