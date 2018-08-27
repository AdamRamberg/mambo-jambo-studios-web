import styled, { keyframes } from 'styled-components';

const TRANSLATE_TO = '12px';

const smooth = [
  {
    open: [
      { percent: 0, transform: `translateY(0px);` },
      { percent: 25, transform: `translateY(${TRANSLATE_TO});` },
      {
        percent: 100,
        transform: `translateY(${TRANSLATE_TO}) rotateZ(-45deg);`,
      },
    ],
  },
  {
    open: [
      { percent: 0, transform: `scaleX(1);` },
      { percent: 100, transform: `scaleX(0.1);` },
    ],
  },
  {
    open: [
      { percent: 0, transform: `translateY(0px);` },
      { percent: 25, transform: `translateY(${`-${TRANSLATE_TO}`});` },
      {
        percent: 100,
        transform: `translateY(${`-${TRANSLATE_TO}`}) rotateZ(45deg);`,
      },
    ],
  },
];

const elastic = [
  {
    open: [
      { percent: 0, transform: `translateY(0px);` },
      { percent: 10, transform: `translateY(${TRANSLATE_TO});` },
      {
        percent: 90,
        transform: `translateY(${TRANSLATE_TO}) rotateZ(-55deg);`,
      },
      {
        percent: 100,
        transform: `translateY(${TRANSLATE_TO}) rotateZ(-45deg);`,
      },
    ],
    close: [
      {
        percent: 0,
        transform: `translateY(${TRANSLATE_TO}) rotateZ(-45deg);`,
      },

      { percent: 30, transform: `translateY(${TRANSLATE_TO}) rotateZ(0deg);` },
      { percent: 90, transform: `translateY(-4px) rotateZ(0deg);` },
      { percent: 100, transform: `translateY(0px) rotateZ(0deg);` },
    ],
  },
  {
    open: [
      { percent: 0, transform: `scaleX(1);` },
      { percent: 90, transform: `scaleX(0.05);` },
      { percent: 100, transform: `scaleX(0.1);` },
    ],
    close: [
      { percent: 0, transform: `scaleX(0.1);` },
      { percent: 90, transform: `scaleX(1.1);` },
      { percent: 100, transform: `scaleX(1);` },
    ],
  },
  {
    open: [
      { percent: 0, transform: `translateY(0px);` },
      { percent: 10, transform: `translateY(${`-${TRANSLATE_TO}`});` },
      {
        percent: 90,
        transform: `translateY(${`-${TRANSLATE_TO}`}) rotateZ(55deg);`,
      },
      {
        percent: 100,
        transform: `translateY(${`-${TRANSLATE_TO}`}) rotateZ(45deg);`,
      },
    ],
    close: [
      {
        percent: 0,
        transform: `translateY(-${TRANSLATE_TO}) rotateZ(45deg);`,
      },

      { percent: 30, transform: `translateY(-${TRANSLATE_TO}) rotateZ(0deg);` },
      { percent: 90, transform: `translateY(4px) rotateZ(0deg);` },
      { percent: 100, transform: `translateY(0px) rotateZ(0deg);` },
    ],
  },
];

const ANIMATION_TYPES = {
  smooth,
  elastic,
};

const createKeyframes = ({ index, open, animationType }) => {
  if (!Object.prototype.hasOwnProperty.call(ANIMATION_TYPES, animationType)) {
    // eslint-disable-next-line no-console
    console.warn(
      `Animation type ${animationType} not supported. Supported types are: ${Object.keys(
        ANIMATION_TYPES,
      ).join(', ')}. Defaulting to smooth.`,
    );
    animationType = 'smooth'; // eslint-disable-line no-param-reassign
  }

  const hasExplicitCloseSeq = Object.prototype.hasOwnProperty.call(
    ANIMATION_TYPES[animationType][index],
    'close',
  );
  const sequence =
    !open && hasExplicitCloseSeq
      ? ANIMATION_TYPES[animationType][index].close
      : ANIMATION_TYPES[animationType][index].open;

  const stringifiedSeq = sequence.map(
    step =>
      `${
        open || hasExplicitCloseSeq ? step.percent : 100 - step.percent
      }% { transform: ${step.transform} }`,
  );

  return keyframes`
    ${
      open || hasExplicitCloseSeq
        ? stringifiedSeq.join(' ')
        : stringifiedSeq.reverse().join(' ')
    }
  `;
};

export const HamburgerBox = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover > * {
  }
`;

export const HamburgerBar = styled.span`
  background-color: ${({ color }) => color || 'black'};
  height: 4px;
  width: 50%;
  margin: 4px 0;
  ${({
    open,
    index,
    animationType,
    animationDuration,
    hasOpenStateChanged,
  }) => {
    const duration = !hasOpenStateChanged ? 0 : animationDuration;
    const animationOpts = `${duration}s linear forwards`;

    return `animation: ${createKeyframes({
      index,
      open,
      animationType,
    })} ${animationOpts}
  `;
  }};
`;
