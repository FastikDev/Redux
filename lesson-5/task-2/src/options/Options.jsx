import React from 'react';
import PropTypes from 'prop-types';

const Options = ({ title, options, moveOptions }) => {
  return (
    <div className="options">
      <div className="options__title">{title}</div>
      <ul className="options__list">
        {options.map(option => (
          <li key={option.id}>
            <button className="options__list-item" onClick={() => moveOptions(option.id)}>
              {option.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

Options.prototype = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  moveOptions: PropTypes.func.isRequired,
};

export default Options;
