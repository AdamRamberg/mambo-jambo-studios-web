import { injectGlobal } from 'styled-components';

import theme from './index';

import PTSansRegular from '../assets/fonts/PT_Sans/PT_Sans-Web-Regular.ttf';
import PTSansBold from '../assets/fonts/PT_Sans/PT_Sans-Web-Bold.ttf';
import PTSansItalic from '../assets/fonts/PT_Sans/PT_Sans-Web-Italic.ttf';
import PTSansBoldItalic from '../assets/fonts/PT_Sans/PT_Sans-Web-BoldItalic.ttf';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  @font-face {
    font-family: 'PT Sans', sans-serif;
    src: url('${PTSansRegular}') format('truetype');
  }
  @font-face {
    font-family: 'PT Sans', sans-serif;
    src: url('${PTSansBold}') format('truetype');
    font-weight: bold;
  }
  @font-face {
    font-family: 'PT Sans', sans-serif;
    src: url('${PTSansItalic}') format('truetype');
    font-style: italic;
  }
  @font-face {
    font-family: 'PT Sans', sans-serif;
    src: url('${PTSansBoldItalic}') format('truetype');
    font-weight: bold;
    font-style: italic;
  }

  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  html,
  body {
    font-family: 'PT Sans';
    height: 100%;
    width: 100%;
		margin: 0;
    background-color: ${theme.colors.primary};
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }
`;
