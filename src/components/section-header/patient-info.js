// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Icon } from '../image';

type Props = {
  +name: string,
  +id: string,
};

const PatientInfo = (props: Props) => <PatientInfoView {...props} />;

const PatientInfoView = ({ name, id }: Props) => (
  <div className="patient-info">
    <Link to={`/patient/${ id }`}>
      <Icon name="patientAvatar" />
      <span className="text-highlight bold patient-name">{name}</span>
    </Link>
    <div className="patient-id">
      <span className="bold">{'ID: '}</span>
      <span>{id}</span>
    </div>
  </div>
);

const mapStateToProps = ({ selectedPatient: { name, id } }) => ({
  name,
  id,
});

export default connect(mapStateToProps)(PatientInfo);

