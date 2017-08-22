// @flow
import React from 'react';
import { icons } from '../../assets';

type Props = {
  +name: string,
};

const Icon = ({ name }: Props) => {
  if (!icons[name]) {
    throw new Error(`Icon "${ name }" is not present in asset folder.`);
  }

  return (
    <img
      src={icons[name]}
      alt={name}
      className="icon"
    />
  );
};

export default Icon;
