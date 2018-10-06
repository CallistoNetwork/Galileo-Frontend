import { combineReducers } from 'redux';
import mockReducer from './mockReducer';

const rootReducer = combineReducers(
  {
    appName: mockReducer,
    messages: mockReducer,
  });

export default rootReducer;
