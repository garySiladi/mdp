// @flow
import { RECEIVED_PATIENTS, SELECT_PATIENT } from './actions';
import type { ActionType } from './actions';
import type { StateType } from '../store';

const INITIAL_STATE = {};

export const receiveDataReducer = (state: StateType = INITIAL_STATE, action: ActionType) => {
  switch (action.type) {
    case RECEIVED_PATIENTS: {
      return {
        ...state,
        patientList: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export const selectPatientReducer = (state: StateType = INITIAL_STATE, action: ActionType) => {
  switch (action.type) {
    case SELECT_PATIENT: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
