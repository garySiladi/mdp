// @flow
import React from 'react';
import { Link } from 'react-router-dom';

const AnalysisHeader = () => <AnalysisHeaderView />;

const AnalysisHeaderView = () => (
  <div className="analysis-header">
    <div>Found tumors</div>
    <div>Expected Result</div>
    <div>Calculated Result</div>
    <div>
      <Link to="#" className="link-button">3D view</Link>
    </div>
  </div>
);

export default AnalysisHeader;
