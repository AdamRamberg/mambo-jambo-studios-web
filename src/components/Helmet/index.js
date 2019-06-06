import React from 'react';
import { Helmet as ReactHelmet } from 'react-helmet';
import Favicon from './favicon.ico';

export const Helmet = () => (
  <ReactHelmet>
    <title>Mambo Jambo Studios AB</title>
    <link rel="shortcut icon" type="image/png" href={Favicon} />
  </ReactHelmet>
);
