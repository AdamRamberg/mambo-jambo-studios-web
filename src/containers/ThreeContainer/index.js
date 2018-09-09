import React, { Component } from 'react';

import { Container } from './styled';
import threeEntryPoint from './threejs';
import { BLACK } from '../../theme/colors';

export default class ThreeContainer extends Component {
  componentDidMount() {
    threeEntryPoint(this.threeRootElement, { sceneBackgroundColor: BLACK });
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
