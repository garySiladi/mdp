// @flow
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchStudies, receivedStudies } from '../../api';
import { SectionHeader, PatientDetail, PatientInfo, PatientStudies } from '../section-header';
import { StudyCollection } from '../study-collection';
import type { Study } from '../../store';

type Props = { // FIXME: update props
  +actions: {
    +dispatchReceivedStudies: Function,
  },
  +selectedPatient: Study,
};

class PatientPage extends React.Component {
  componentWillMount() {
    const { selectedPatient, actions } = this.props;
    fetchStudies(selectedPatient, actions.dispatchReceivedStudies);
  }
  props:Props
  render() {
    return <PatientPageView />;
  }
}

const PatientPageView = () => (
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

const mapStateToProps = state => ({ selectedPatient: state.selectedPatient });

const mapDispatchToProps = dispatch => ({
  actions:
    bindActionCreators({
      dispatchReceivedStudies: receivedStudies,
    }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PatientPage);
