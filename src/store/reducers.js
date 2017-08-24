// @flow
import { combineReducers } from 'redux';
import { receiveDataReducer, selectPatientReducer } from '../api';

const combinedReducers = combineReducers({
  data: receiveDataReducer,
  selectedPatient: selectPatientReducer,
});

export default combinedReducers;
