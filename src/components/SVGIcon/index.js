import React from 'react';
import { string, number } from 'prop-types';


const SVGIcon = ({ name, width, height, color }) => (
  <svg width={width} height={height}>
    <use fill={color} xlinkHref={`#${name}`} />
  </svg>
);

SVGIcon.propTypes = {
  name: string.isRequired,
  width: number,
  height: number,
  color: string,
};

SVGIcon.defaultProps = {
  width: 40,
  height: 40,
  color: 'white',
};

export default SVGIcon;
