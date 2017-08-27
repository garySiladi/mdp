// @flow
import React from 'react';
import { Icon } from '../image';
import profilePic from '../../assets/profile-pic.png';

const Header = () => (
  <div className="header">
    <div className="logo" />
    <div className="profile">
      <span className="bold text-highlight">Dr. The Doctor</span>
      <img src={profilePic} alt="..." className="profile-pic" />
      <Icon name="dropdownArrow" />
    </div>
    <Icon name="logout" className="logout" />
  </div>
);

export default Header;
