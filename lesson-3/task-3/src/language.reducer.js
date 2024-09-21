import { SET_LANGUAGE } from './language.actions';
import { initState } from './store';

const languageReducer = (state = initState.language, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return action.payload;
    default:
      return state;
  }
};

export default languageReducer;
