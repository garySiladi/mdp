// @flow
import React from 'react';
import { SectionHeader, PatientDetail, PatientInfo, PatientStudies } from '../section-header';
import { StudyCollection } from '../study-collection';

const PatientPage = () => (
  <div className="patientpage">
    <SectionHeader>
      <PatientInfo />
      <PatientDetail />
      <PatientStudies />
    </SectionHeader>
    <div className="section-body">
      <StudyCollection />
    </div>
  </div>
);

export default PatientPage;
