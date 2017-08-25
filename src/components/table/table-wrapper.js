// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchPatients, receivedPatients, selectPatient } from '../../api';
import { TableViewer } from './';

type Props = {
  +actions: {
    +dispatchReceivedPatients: Function,
    +dispatchSelectedPatient: Function,
  },
  data: PropTypes.arrayOf
};

class TableWrapper extends React.Component<{}> {
  componentDidMount() {
    fetchPatients(this.props.actions.dispatchReceivedPatients);
  }
  props: Props
  render() {
    return (
      <div>
        <TableViewer
          data={this.props.data.patientList}
          handleSelectPatient={this.props.actions.dispatchSelectedPatient}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { data: state.data };
}

function mapDispatchToProps(dispatch) {
  return {
    actions:
      bindActionCreators({
        dispatchReceivedPatients: receivedPatients,
        dispatchSelectedPatient: selectPatient,
      }, dispatch),
  };
}

TableWrapper.propTypes = {
  actions: PropTypes.shape({
    dispatchReceivedPatients: PropTypes.func,
    dispatchSelectedPatient: PropTypes.func,
  }),
};

TableWrapper.defaultProps = {
  actions: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(TableWrapper);
