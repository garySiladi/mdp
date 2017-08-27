// @flow
import React from 'react';
import { Icon } from '../image';
import { formatDate } from '../../util';

type Props = {
  +name: string,
  +sliceCount: number,
  +date: Date,
};

const StudyInfo = ({ name, sliceCount, date }: Props) => (
  <div className="studyinfo">
    <span className="label study-name bold text-highlight">{name}</span>
    <Icon className="number-of-picture-icon label" name="numberOfPicture" />
    <span className="study-count text-light">{sliceCount}</span>
    <span className="label">Date of Study</span>
    <span className="last-study-date text-light">{formatDate(date)}</span>
    <Icon className="print-icon" name="print" />
  </div>
);

export default StudyInfo;
