// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../image';

const BackButton = () => (
  <Link to="#" className="back-button">
    <Icon name="backArrow" />
  </Link>
);

export default BackButton;
