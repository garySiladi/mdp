// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../image';

type Props = {
  +name: string,
  +patientId: string,
};

const PatientInfoView = ({ name, patientId }: Props) => (
  <Link to={`/patient/${ patientId }`} className="patient-info">
    <Icon name="patientAvatar" />
    <div>
      <div className="text-highlight bold">{name}</div>
      <div>
        <span>{'ID: '}</span>
        <span className="bold">{patientId}</span>
      </div>
    </div>
  </Link>
);

export default PatientInfoView;
