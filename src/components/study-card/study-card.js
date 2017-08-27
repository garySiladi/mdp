// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../image';
import type { Study } from '../../store';
import { formatDate } from '../../util';

const StudyCard = ({ id, name, date, pictureCount, previewImage }: Study) => (
  <div className="study-card">
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
    <div className="study-card-buttons">
      <Link to={`/analysis/${ id }`} className="text-highlight study-card-button">Analyis</Link>
      <Link to={`/study/${ id }`} className="text-highlight study-card-button">3D View</Link>
      <Link to={`/study/${ id }`} className="text-highlight study-card-button">
        Detail
        <Icon name="rightArrow" />
      </Link>
    </div>
  </div>
);

export default StudyCard;
