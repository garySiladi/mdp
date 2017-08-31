// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Icon } from '../image';
import { formatDate } from '../../util';

type Props = {
  +name: string,
  +nodules: Array,
  +date: Date,
};

const StudyInfo = ({ name, nodules = [], date }: Props) => (
  <div className="studyinfo">
    <span className="label study-name bold text-highlight">{name}</span>
    <Icon className="number-of-picture-icon label" name="numberOfPicture" />
    <span className="study-count text-light">{nodules.length}</span>
    <span className="label">Date of Study</span>
    <span className="last-study-date text-light">{formatDate(date)}</span>
    <Icon className="print-icon" name="print" />
  </div>
);

const mapStateToProps = ({ selectedStudy: { name, nodules, date } }) => ({
  name,
  nodules,
  date,
});

export default connect(mapStateToProps)(StudyInfo);
