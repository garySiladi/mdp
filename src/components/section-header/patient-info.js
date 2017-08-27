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
  <Link to={`/patient/${ id }`} className="patient-info">
    <div>
      <Icon name="patientAvatar" />
      <span className="text-highlight bold patient-name">{name}</span>
    </div>
    <div className="patient-id">
      <span>{'ID: '}</span>
      <span className="bold id">{id}</span>
    </div>
  </Link>
);

const mapStateToProps = ({ selectedPatient: { name, id } }) => ({
  name,
  id,
});

export default connect(mapStateToProps)(PatientInfo);

