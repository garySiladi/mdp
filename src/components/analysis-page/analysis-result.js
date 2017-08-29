import React from 'react';
import { Icon } from '../image';

type Props = {
  +title: string,
  +results: Array<Number>,
};

const AnalysisResult = ({ title, results }: Props) => (
  <div className="analysis-result">
    {results && results[0] ? (
      <div>
        <Icon name="alert" className="result-alert" />
        <span className="malign-result result-number">{results[0]}</span>
        <span className="malign-result result-text">{' malign'}</span>
      </div>
    ) : null}
    {results && results[1] ? (
      <div>
        <span className="benign-result result-number">{results[1]}</span>
        <span className="benign-result result-text">{' benign'}</span>
      </div>
    ) : null}
    <span className="result-title">{title}</span>
  </div>
);

export default AnalysisResult;
