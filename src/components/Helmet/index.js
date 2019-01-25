import React from 'react';
import { Helmet as ReactHelmet } from 'react-helmet';
import Favicon from './favicon.ico';

export const Helmet = () => (
  <ReactHelmet>
    <meta charSet="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, maximum-scale=1.0, user-scalable=no"
    />
    <meta httpEquiv="X-UA-Compatible" content="IE=EmulateIE11" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-capable" content="no" />
    <meta
      name="apple-mobile-web-app-status-bar-style"
      content="black-transparent"
    />
    <title>Mambo Jambo Studios AB</title>
    <link rel="shortcut icon" type="image/png" href={Favicon} />
  </ReactHelmet>
);
