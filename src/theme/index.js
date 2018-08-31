import { fontSizeMajorSecond } from './fontSize';
import { BLACK, WHITE, LOVE } from './colors';

const theme = {
  colors: {
    primary: BLACK,
    secondary: BLACK,
    accent: LOVE,
    text: {
      primary: WHITE,
      secondary: BLACK,
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
