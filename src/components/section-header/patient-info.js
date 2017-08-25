// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Icon } from '../image';

type Props = {
  +name: string,
  +patientId: string,
};

const PatientInfo = (props: Props) => <PatientInfoView {...props} />;

const PatientInfoView = ({ name, patientId }: Props) => (
  <Link to={`/patient/${ patientId }`} className="patient-info">
    <div>
      <Icon name="patientAvatar" />
      <span className="text-highlight bold">{name}</span>
    </div>
    <div>
      <span>{'ID: '}</span>
      <span className="bold">{patientId}</span>
    </div>
  </Link>
);

const mapStateToProps = { selectedPatient: { name, id }} => ({
  name,
  id,
});

export default connect(mapStateToProps)(PatientInfo);
