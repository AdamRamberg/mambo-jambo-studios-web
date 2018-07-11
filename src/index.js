import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './containers/App';

// Load .htaccess
// import 'file-loader?name=[name].[ext]!./.htaccess'; // eslint-disable-line import/extensions

// Import global styles
import './global-styles';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
