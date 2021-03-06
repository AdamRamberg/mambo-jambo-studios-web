import React, { Component } from 'react';
import { bool, string, number } from 'prop-types';

import { HamburgerBox, HamburgerBar } from './styled';

class Hamburger extends Component {
  state = {
    hasOpenStateChanged: false,
  };

  componentDidUpdate({ prevOpen }) {
    const { open } = this.props;
    const { hasOpenStateChanged } = this.state;
    if (!hasOpenStateChanged && prevOpen !== open) {
      this.setState({ hasOpenStateChanged: true }); // eslint-disable-line react/no-did-update-set-state
    }
  }

  render() {
    const {
      open,
      animationType,
      animationDuration,
      color,
      ...rest
    } = this.props;
    const { hasOpenStateChanged } = this.state;
    return (
      <HamburgerBox {...rest}>
        <HamburgerBar
          animationType={animationType}
          animationDuration={animationDuration}
          hasOpenStateChanged={hasOpenStateChanged}
          open={open}
          index={0}
          color={color}
        />
        <HamburgerBar
          animationType={animationType}
          animationDuration={animationDuration}
          hasOpenStateChanged={hasOpenStateChanged}
          open={open}
          index={1}
          color={color}
        />
        <HamburgerBar
          animationType={animationType}
          animationDuration={animationDuration}
          hasOpenStateChanged={hasOpenStateChanged}
          open={open}
          index={2}
          color={color}
        />
      </HamburgerBox>
    );
  }
}

Hamburger.defaultProps = {
  animationType: 'smooth',
  animationDuration: 0.3,
};

Hamburger.propTypes = {
  open: bool.isRequired,
  animationType: string,
  animationDuration: number,
  color: string,
};

export default Hamburger;
