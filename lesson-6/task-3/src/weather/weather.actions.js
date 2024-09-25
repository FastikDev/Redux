import { getWeather } from "./weather.gateway";

export const GET_WEATHER_DATA = 'GET_WEATHER_DATA';

const weatherDataRecieved = weatherData => {
    return {
        type: GET_WEATHER_DATA,
        payload:  weatherData,
    }
}

export const getWeatherData = () => {
    return function (dispatch) {
        getWeather().then(weather => {
            dispatch(weatherDataRecieved(weather));
        })
    }
}