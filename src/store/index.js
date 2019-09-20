// Redux
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

// Reducer
import {city} from './../reducers/city';

// Constants 
import {INITIALCITY} from './../constants/weather';

// Initial state
const initialState = {
  city: INITIALCITY
};

// Middleware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose;

// Store (redux)
export const store = createStore(city, initialState, composeEnhancers(applyMiddleware(thunk)));