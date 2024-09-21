import { SET_LANGUAGE } from './language.actions';

const initState = {
  language: 'en',
};

const languageReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return action.payload;
    default:
      return state;
  }
};

export default languageReducer;
