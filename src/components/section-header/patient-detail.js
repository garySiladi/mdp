// @flow
import React from 'react';
import { Icon } from '../image';

type Props = {
  +phone: string,
  +email: string,
};

const PatientDetailView = ({ phone, email }: Props) => (
  <div className="patient-detail">
      <div>
        <Icon name="phone" />
        <span className="text-light bold">{phone}</span>
      </div>
      <div>
        <Icon name="email" />
        <span className="text-highlight">{email}</span>
      </div>
  </div>
);

export default PatientDetailView;
