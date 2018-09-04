import React, { Component } from 'react';

import { Container } from './styled';
import threeEntryPoint from './threejs';

export default class ThreeContainer extends Component {
  componentDidMount() {
    threeEntryPoint(this.threeRootElement);
  }

  render() {
    return (
      <Container
        innerRef={element => {
          this.threeRootElement = element;
        }}
      />
    );
  }
}
