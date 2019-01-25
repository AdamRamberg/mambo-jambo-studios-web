import React from 'react';
import versions from '../../../version.json';

const VersionsPage = () => (
  <div>
    <pre>{JSON.stringify(versions, null, 2)}</pre>
  </div>
);

export default VersionsPage;
