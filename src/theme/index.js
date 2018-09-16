import { fontSizeMajorSecond } from './fontSize';
import {
  BLACK,
  TRANSPARENT_BLACK,
  WHITE,
  LOVE,
  BRIGHTER_LOVE,
  PURPLE,
} from './colors';
import { createMedia } from '../utils/mixins';
import { BREAKPOINTS } from './breakpoints';
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
    xs: '0.25rem',
    sm: '0.5rem',
    m: '1rem',
    l: '1.5rem',
    xl: '2rem',
  },
  header: {
    height: HEADER_HEIGHT,
  },
  media: createMedia(BREAKPOINTS),
};

export default theme;
