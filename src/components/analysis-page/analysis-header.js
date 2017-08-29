// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AnalysisResult from './analysis-result';
import type { Study } from '../../store';

const AnalysisHeader = ({ selectedStudy }: Study) => <AnalysisHeaderView {...selectedStudy} />;

type Props = {
  +previewImage: string,
  +expectedResult: Array<Number>,
  +actualResult: Array<Number>,
};

const AnalysisHeaderView = ({ previewImage, expectedResult, actualResult }: Props) => (
  <div className="analysis-header">
    <div>
      <img src={previewImage} alt="..." className="analysis-image" />
    </div>
    <div>
      <AnalysisResult title="Expected result" results={expectedResult} />
    </div>
    <div>
      <AnalysisResult title="Calculated result" results={actualResult} />
    </div>
    <div className="analysis-header-button">
      <Link to="#" className="link-button">3D view</Link>
    </div>
  </div>
);

const mapStateToProps = state => ({ selectedStudy: state.selectedStudy });

export default connect(mapStateToProps)(AnalysisHeader);
