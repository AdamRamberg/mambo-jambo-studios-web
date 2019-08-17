import React, { Component } from 'react';
import { string, arrayOf, shape, oneOfType, object } from 'prop-types';

import { StyledText, Wrapper } from './styled';

export default class TextCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const { items } = this.props;
      this.setState(prevState => ({
        activeId: (prevState.activeId + 1) % items.length,
      }));
    }, 2500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { activeId } = this.state;
    const { items } = this.props;
    const { text, backgroundColor, color, textShadowColor, width } = items[
      activeId
    ];
    return (
      <Wrapper>
        <StyledText
          backgroundColor={backgroundColor}
          color={color}
          textShadowColor={textShadowColor}
          width={width}
        >
          {text}
        </StyledText>
      </Wrapper>
    );
  }
}

TextCarousel.propTypes = {
  items: arrayOf(
    shape({
      text: oneOfType([string, object]).isRequired,
      backgroundColor: string,
      color: string,
      textShadowColor: string,
    }),
  ).isRequired,
};
