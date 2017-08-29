// @flow
const ENDPOINT = 'http://172.20.39.140:3000/api';

const dummyPatients = [
  {
    id: '599d56b015c2230b24a37895',
    name: 'Patient Dummy 1',
    phone: '+421123456789',
    email: 'patient.dummy1@email.com',
    lastStudyDate: '2017-08-23T10:19:28.893Z',
    studyCount: 2,
  },
  {
    id: '599d56b015c2230b24a37896',
    name: 'Patient Dummy 2',
    phone: '+421123456789',
    email: 'patient.dummy1@email.com',
    lastStudyDate: '2017-08-23T10:19:28.893Z',
    studyCount: 3,
  },
];

const dummyStudy = {
  id: '7',
  patientId: '599d56b015c2230b24a37895',
  name: 'Sag T1 FSE',
  date: '2017-08-23T10:19:28.893Z',
  sliceCount: 20,
  previewImage: 'http://sciencenordic.com/sites/default/files/imagecache/620x/MR-UiO_None.jpg',
  expectedResult: [1, 3],
  actualResult: [1, 2],
};

const fetchData = (url, callback, temporaryFakeValue = dummyPatients) => {
  console.log(`Fetching: ${ ENDPOINT }${ url }`); // eslint-disable-line
  callback(temporaryFakeValue);
};

export const fetchPatients = (dispatchReceivedPatients: Function) => {
  fetchData('/patients', dispatchReceivedPatients);
};

export const fetchStudies = (patientId: string, dispatchReceivedStudies: Function) => (
  fetchData(`/studies/${ patientId }`, dispatchReceivedStudies, [dummyStudy])
);
