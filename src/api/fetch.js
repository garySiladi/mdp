// @flow
const ENDPOINT = 'http://172.20.39.140:3000/api';

const dummyPatients = [
  {
    id: '599d56b015c2230b24a37895',
    name: 'Patient Dummy 1',
    phone: '+421123456789',
    email: 'patient.dummy1@email.com',
    lastStudyDate: '2017-08-23T10:19:28.893Z',
    studyCount: 0,
  },
  {
    id: '599d56b015c2230b24a37896',
    name: 'Patient Dummy 2',
    phone: '+421123456789',
    email: 'patient.dummy1@email.com',
    lastStudyDate: '2017-08-23T10:19:28.893Z',
    studyCount: 0,
  },
];

const fetchData = (url, callback, temporaryFakeValue = dummyPatients) => {
  console.log(`Fetching: ${ ENDPOINT }${ url }`);
  callback(temporaryFakeValue);
};

export const fetchPatients = (dispatchReceivedPatients: Function) => {
  fetchData('/patients', dispatchReceivedPatients);
};
