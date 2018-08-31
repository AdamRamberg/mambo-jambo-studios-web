import React, { Component } from 'react';
import { string, number, arrayOf, shape } from 'prop-types';

import { StyledText, Wrapper } from './styles';

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
    const { items, width } = this.props;
    return (
      <Wrapper width={width}>
        {items.map(
          ({ text, id, backgroundColor, color, textShadowColor }, index) => (
            <StyledText
              key={id}
              visible={index === activeId}
              backgroundColor={backgroundColor}
              color={color}
              textShadowColor={textShadowColor}
            >
              {text}
            </StyledText>
          ),
        )}
      </Wrapper>
    );
  }
}

TextCarousel.propTypes = {
  items: arrayOf(
    shape({
      text: string.isRequired,
      id: number.isRequired,
      backgroundColor: string,
      color: string,
      textShadowColor: string,
    }),
  ).isRequired,
  width: string,
};
