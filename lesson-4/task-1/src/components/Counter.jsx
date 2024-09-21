import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from '../counter.actions';

const Counter = ({ counter, dec, inc, res }) => {
  return (
    <div className="counter">
      <button className="counter__button" onClick={dec}>
        -
      </button>
      <span className="counter__value" onClick={res}>
        {counter}
      </span>
      <button className="counter__button" onClick={inc}>
        +
      </button>
    </div>
  );
};

const mapState = state => {
  return {
    counter: state,
  };
};

const mapDispatch = dispatch => {
  return {
    inc: () => dispatch(increment()),
    dec: () => dispatch(decrement()),
    res: () => dispatch(reset()),
  };
};

const connector = connect(mapState, mapDispatch); // HOC

export default connector(Counter);
