import { fontSizeMajorSecond } from './fontSize';

const theme = {
  colors: {
    primary: '#0a0a0a',
    secondary: '#0a0a0a',
    accent: '#0a0a0a',
    text: {
      primary: '#f6f6f6',
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
