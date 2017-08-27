// @flow
export type Patient = {
  +id: string,
  +name: string,
  +phone: string,
  +email: string,
  +studyCount: number,
  +lastStudyDate: Date,
}

export type Study = {
  +id: string,
  +name: string,
  +date: Date,
  +pictureCount: number,
  +previewImage: string,
}

export type State = {
  +data: {
    patientList: Array<Patient>,
  },
  +selectedPatient: Patient,
};
