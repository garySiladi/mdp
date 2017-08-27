// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Icon } from '../image';
import { formatDate } from '../../util';

type Props = {
  +studyCount: number,
  +lastStudyDate: string,
};

const StudyInfo = ({ studyCount, lastStudyDate }: Props) => (
  <div className="studyinfo">
    <span className="label">Studies</span>
    <span className="study-count text-light">{studyCount}</span>
    <span className="label">Last Study</span>
    <span className="last-study-date text-light">{formatDate(lastStudyDate)}</span>
    <Icon name="print" />
  </div>
);


const mapStateToProps = ({ selectedPatient: { studyCount, lastStudyDate } }) => ({
  studyCount,
  lastStudyDate,
});

export default connect(mapStateToProps)(StudyInfo);
