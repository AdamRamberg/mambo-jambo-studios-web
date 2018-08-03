import { css } from 'styled-components';

export const media = {
  xSmallUp: (...args) => css`
    @media (min-width: 480px) {
      ${css(...args)};
    }
  `,
  smallUp: (...args) => css`
    @media (min-width: 576px) {
      ${css(...args)};
    }
  `,
  mediumUp: (...args) => css`
    @media (min-width: 768px) {
      ${css(...args)};
    }
  `,
  largeUp: (...args) => css`
    @media (min-width: 992px) {
      ${css(...args)};
    }
  `,
  xLargeUp: (...args) => css`
    @media (min-width: 1200px) {
      ${css(...args)};
    }
  `,
};
