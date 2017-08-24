// @flow
export type Patient = {
  +id: string,
  +name: string,
  +phone: string,
  +email: string,
  +studyCount: number,
  +lastStudyDate: Date,
}

export type State = {
  +data: {
    patientList: Array<Patient>,
  },
  +selectedPatient: Patient,
};
