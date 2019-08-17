import { createGlobalStyle } from 'styled-components';
import styledSanitize from 'styled-sanitize';

import theme from './index';

import PTSansRegular from '../assets/fonts/PT_Sans/PT_Sans-Web-Regular.ttf';
import PTSansBold from '../assets/fonts/PT_Sans/PT_Sans-Web-Bold.ttf';
import PTSansItalic from '../assets/fonts/PT_Sans/PT_Sans-Web-Italic.ttf';
import PTSansBoldItalic from '../assets/fonts/PT_Sans/PT_Sans-Web-BoldItalic.ttf';

export default createGlobalStyle`
  ${styledSanitize}

  @font-face {
    font-family: "PT Sans";
    src: url(${PTSansRegular}) format("truetype");
  }
  @font-face {
    font-family: "PT Sans";
    src: url(${PTSansBold}) format("truetype");
    font-weight: bold;
  }
  @font-face {
    font-family: "PT Sans";
    src: url(${PTSansItalic}) format("truetype");
    font-style: italic;
  }
  @font-face {
    font-family: "PT Sans";
    src: url(${PTSansBoldItalic}) format("truetype");
    font-weight: bold;
    font-style: italic;
  }

  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
    color: ${theme?.colors?.text?.primary}
  }

  html,
  body {
    font-family: "PT Sans";
    height: 100%;
    width: 100%;
		margin: 0;
    background-color: ${theme?.colors?.primary};
    color: ${theme?.colors?.text?.primary};
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  h1, h2, h3, h4, h5 {
    color: ${theme?.colors?.brightAccent};
  }

  span, p {
    line-height: 1.6;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    padding: 0;
  }
`;
