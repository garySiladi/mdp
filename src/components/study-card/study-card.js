// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../image';
import type { Study } from '../../store';
import { formatDate } from '../../util';

// TODO: Adding 'study-card-button' makes text centered, need to double check with designer
const StudyCard = ({ id, name, date, pictureCount, previewImage }: Study) => (
  <div className="study-card">
    <a href={`/viewer/${ id }`} className="study-card-button study-card-body">
      <img
        src={previewImage} // TODO: image processing/component
        alt={name}
        className="preview-image"
      />
      <span className="text-highlight bold">{name}</span>
      <div className="study-card-text">
        <span>{formatDate(date)}</span>
        <Icon name="numberOfPicture" />
        <span className="text-light">{pictureCount}</span>
      </div>
    </a>
    <div className="study-card-buttons">
      <Link to={`/analysis/${ id }`} className="text-highlight study-card-button">Analyis</Link>
      <a href={`/viewer/${ id }`} className="text-highlight study-card-button">
        Detail
        <Icon name="rightArrow" />
      </a>
    </div>
  </div>
);

export default StudyCard;
