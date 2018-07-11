import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
		margin: 0;
		background-color: #fafafa;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }
`;
