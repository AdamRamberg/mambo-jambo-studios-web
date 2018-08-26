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
    small: '0.5rem',
    medium: '1rem',
    large: '2rem',
  },
  header: {
    height: '64px',
  },
};

export default theme;
