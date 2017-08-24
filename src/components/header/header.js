// @flow
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchPatients, receivedPatients } from '../../api';

type Props = {
  +actions: {
    +dispatchReceivedPatients: Function,
  },
};

const Header = ({ actions }: Props) => (
  <div className="header">
    <button
      onClick={() => { fetchPatients(actions.dispatchReceivedPatients); }}
    >
      Load patients
    </button>
  </div>
);

export default connect(null,
  dispatch => ({
    actions: bindActionCreators({ dispatchReceivedPatients: receivedPatients }, dispatch),
  }),
)(Header);
