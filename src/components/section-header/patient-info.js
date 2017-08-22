// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../image';

type Props = {
  +name: string,
  +patientId: string,
};

const PatientInfoView = ({ name, patientId }: Props) => (
  <Link to={`/patient/${ patientId }`}>
    <Icon name="patientAvatar" />
    <div>
      <div>{name}</div>
      <div>{`ID: ${ patientId }`}</div>
    </div>
  </Link>
);

export default PatientInfoView;
