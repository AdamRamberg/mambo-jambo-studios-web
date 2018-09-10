import { fontSizeMajorSecond } from './fontSize';
import {
  BLACK,
  TRANSPARENT_BLACK,
  WHITE,
  LOVE,
  BRIGHTER_LOVE,
  PURPLE,
} from './colors';

const HEADER_HEIGHT = '64px';

const theme = {
  colors: {
    primary: BLACK,
    transparentPrimary: TRANSPARENT_BLACK,
    secondary: WHITE,
    accent: LOVE,
    brightAccent: BRIGHTER_LOVE,
    secondaryAccent: PURPLE,
    text: {
      primary: WHITE,
      secondary: BLACK,
    },
  },
  fontSize: fontSizeMajorSecond({ basePixelFontSize: 18 }),
  spacing: {
    small: '0.5rem',
    medium: '1rem',
    large: '1.5rem',
    xl: '2rem',
  },
  header: {
    height: HEADER_HEIGHT,
  },
};

export default theme;
