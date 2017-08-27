// @flow
import React from 'react';

type Props = {
  +children: Children,
};

const SectionHeader = (props:Props) => (
  <div className="section-header">
    {props.children}
  </div>
);

export default SectionHeader;
