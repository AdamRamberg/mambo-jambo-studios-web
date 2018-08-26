import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        {items.map(({ text, id, backgroundColor }, index) => (
          <StyledText
            key={id}
            visible={index === activeId}
            backgroundColor={backgroundColor}
          >
            {text}
          </StyledText>
        ))}
      </Wrapper>
    );
  }
}

TextCarousel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      backgroundColor: PropTypes.string,
    }),
  ).isRequired,
  width: PropTypes.string,
};
