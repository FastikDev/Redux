import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import weatherReducer from './weather/weather.reducer';

const reducer = combineReducers({
    weather: weatherReducer,
});

const store = createStore(reducer, applyMiddleware(thunk))

export default store;