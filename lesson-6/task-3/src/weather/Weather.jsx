import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getWeatherData } from './weather.actions';
import { weatherSelector } from './weather.selector';

const Weather = ({ cities, getWeatherData }) => {
  useEffect(() => {
    getWeatherData();
  }, [getWeatherData]);

  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
        {cities.map(city => (
          <li className="city" key={city.id}>
            <span className="city__name">{city.name}</span>
            <span className="city__temperature">{city.temperature} F</span>
          </li>
        ))}
      </ul>
    </main>
  );
};

Weather.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  getWeatherData: PropTypes.func.isRequired,
};

const mapState = state => ({
  cities: weatherSelector(state),
});

const mapDispatch = {
  getWeatherData,
};

export default connect(mapState, mapDispatch)(Weather);
