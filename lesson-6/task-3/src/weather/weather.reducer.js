import { GET_WEATHER_DATA } from "./weather.actions";

const initState = {
    cities: [],
};

const weatherReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_WEATHER_DATA:
            return {
                ...state,
                cities: action.payload,
            };
        default:
            return state;
    }
};

export default weatherReducer;
