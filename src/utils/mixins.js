import { css } from 'styled-components';

const createMediaQuery = breakpoint => (...args) => css`
  @media (min-width: ${`${breakpoint}px`}) {
    ${css(...args)};
  }
`;

export const createMedia = breakpoints => ({
  xSmallUp: createMediaQuery(breakpoints.xs),
  smallUp: createMediaQuery(breakpoints.s),
  mediumUp: createMediaQuery(breakpoints.m),
  largeUp: createMediaQuery(breakpoints.l),
  xLargeUp: createMediaQuery(breakpoints.xl),
});
