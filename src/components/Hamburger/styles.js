import styled, { keyframes } from 'styled-components';

const TRANSLATE_TO = '12px';

const smooth = [
  [
    { percent: 0, transform: `translateY(0px);` },
    { percent: 25, transform: `translateY(${TRANSLATE_TO});` },
    { percent: 100, transform: `translateY(${TRANSLATE_TO}) rotateZ(-45deg);` },
  ],
  [
    { percent: 0, transform: `scaleX(1);` },
    { percent: 100, transform: `scaleX(0.1);` },
  ],
  [
    { percent: 0, transform: `translateY(0px);` },
    { percent: 25, transform: `translateY(${`-${TRANSLATE_TO}`});` },
    {
      percent: 100,
      transform: `translateY(${`-${TRANSLATE_TO}`}) rotateZ(45deg);`,
    },
  ],
];

// START HERE: Make option to explicitly define animations both ways
const elastic = [
  [
    { percent: 0, transform: `translateY(0px);` },
    { percent: 10, transform: `translateY(${TRANSLATE_TO});` },
    { percent: 90, transform: `translateY(${TRANSLATE_TO}) rotateZ(-50deg);` },
    { percent: 100, transform: `translateY(${TRANSLATE_TO}) rotateZ(-45deg);` },
  ],
  [
    { percent: 0, transform: `scaleX(1);` },
    { percent: 90, transform: `scaleX(0.05);` },
    { percent: 100, transform: `scaleX(0.1);` },
  ],
  [
    { percent: 0, transform: `translateY(0px);` },
    { percent: 10, transform: `translateY(${`-${TRANSLATE_TO}`});` },
    {
      percent: 90,
      transform: `translateY(${`-${TRANSLATE_TO}`}) rotateZ(50deg);`,
    },
    {
      percent: 100,
      transform: `translateY(${`-${TRANSLATE_TO}`}) rotateZ(45deg);`,
    },
  ],
];

const ANIMATION_TYPES = {
  smooth,
  elastic,
};

const createKeyframes = ({ index, open, animationType }) => {
  const sequence =
    (ANIMATION_TYPES[animationType] && ANIMATION_TYPES[animationType][index]) ||
    smooth[index];

  const stringifiedSeq = sequence.map(
    step =>
      `${open ? step.percent : 100 - step.percent}% { transform: ${
        step.transform
      } }`,
  );

  return keyframes`
    ${open ? stringifiedSeq.join(' ') : stringifiedSeq.reverse().join(' ')}
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
  background-color: black;
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
