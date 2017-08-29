// @flow
import { combineReducers } from 'redux';
import { receiveDataReducer, selectPatientReducer, selectStudyReducer } from '../api';

const combinedReducers = combineReducers({
  data: receiveDataReducer,
  selectedPatient: selectPatientReducer,
  selectedStudy: selectStudyReducer,
});

export default combinedReducers;
