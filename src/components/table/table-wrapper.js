// @flow
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchPatients, receivedPatients, selectPatient } from '../../api';
import TableViewer from './table-viewer';
import SearchBar from './search-bar';
import type { Patient } from '../../store';

type Props = {
  +actions: {
    +dispatchReceivedPatients: Function,
    +dispatchSelectedPatient: Function,
  },
  +data: {
    patientList: Array<Patient>,
  }
};

class TableWrapper extends React.Component<> {
  static filterResults(list = [], keyword) {
    return list.filter(patient => patient.name.includes(keyword));
  }

  constructor(props) {
    super(props);
    this.state = {
      searchedValue: '',
    };
  }

  componentWillMount() {
    fetchPatients(this.props.actions.dispatchReceivedPatients);
  }

  props:Props
  render() {
    const { data, actions } = this.props;
    return (
      <div>
        <SearchBar onChange={e => { this.setState({ searchedValue: e.target.value }); }} />
        <TableViewer
          data={TableWrapper.filterResults(data.patientList, this.state.searchedValue)}
          handleSelectPatient={actions.dispatchSelectedPatient}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch => ({
  actions:
    bindActionCreators({
      dispatchReceivedPatients: receivedPatients,
      dispatchSelectedPatient: selectPatient,
    }, dispatch),
});

TableWrapper.defaultProps = {
  actions: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(TableWrapper);
