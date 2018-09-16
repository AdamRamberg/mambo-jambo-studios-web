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

export const media = {
  xSmallUp: createMediaQuery(480),
  smallUp: createMediaQuery(576),
  mediumUp: createMediaQuery(768),
  largeUp: createMediaQuery(992),
  xLargeUp: createMediaQuery(1200),
};
