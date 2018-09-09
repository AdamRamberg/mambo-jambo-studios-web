import React from 'react';
import { string, number } from 'prop-types';

const SVGIcon = ({ name, width, height }) => (
  <svg width={width} height={height}>
    <use xlinkHref={`#${name}`} />
  </svg>
);

SVGIcon.propTypes = {
  name: string.isRequired,
  width: number,
  height: number,
};

SVGIcon.defaultProps = {
  width: 40,
  height: 40,
};

export default SVGIcon;
