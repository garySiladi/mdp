// @flow
import type { PatientType } from '../store';

export const RECEIVED_PATIENTS = 'API/RECEIVED_PATIENTS';
export const SELECT_PATIENT = 'API/SELECT_PATIENT';

type ReceivedPatientsType = {
  type: 'API/RECEIVED_PATIENTS',
  payload: Array<PatientType>,
};

type SelectPatientType = {
  type: 'API/SELECT_PATIENT',
  payload: PatientType,
};

export type ActionType =
  | ReceivedPatientsType
  | SelectPatientType;

export const receivedPatients = (patients: Array<PatientType>) => ({
  type: RECEIVED_PATIENTS,
  payload: patients,
});

export const selectPatient = (patient: PatientType) => ({
  type: SELECT_PATIENT,
  payload: patient,
});
