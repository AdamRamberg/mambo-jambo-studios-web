import { fontSizeMajorSecond } from './fontSize';

const theme = {
  colors: {
    primary: '#fafafa',
    secondary: '#fafafa',
    accent: '#fafafa',
    text: {
      primary: '#252942',
    },
  },
  fontSize: fontSizeMajorSecond({ basePixelFontSize: 18 }),
  spacing: {
    small: '0.5em',
    medium: '1em',
    large: '2em',
  },
};

export default theme;
