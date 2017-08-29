// @flow
import {
  RECEIVED_PATIENTS,
  SELECT_PATIENT,
  RECEIVED_STUDIES,
  SELECT_STUDY,
} from './actions';
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
    case RECEIVED_STUDIES: {
      return {
        ...state,
        studies: action.payload,
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
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export const selectStudyReducer = (state: StateType = INITIAL_STATE, action: ActionType) => {
  switch (action.type) {
    case SELECT_STUDY: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
