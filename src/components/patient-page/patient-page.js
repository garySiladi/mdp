// @flow
import React from 'react';
import { SectionHeader, PatientDetail, PatientInfo, StudyInfo } from '../section-header';
import { StudyCollection } from '../study-collection';

const PatientPage = () => (
  <div className="patientpage">
    <SectionHeader>
      <PatientInfo />
      <PatientDetail />
      <StudyInfo />
    </SectionHeader>
    <StudyCollection />
  </div>
);

export default PatientPage;
