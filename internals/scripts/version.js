const path = require('path');
const fs = require('fs');

const pkg = require(path.join(process.cwd(), 'package.json'));
const versionPath = path.join(process.cwd(), 'version.json');

fs.writeFileSync(
  versionPath,
  JSON.stringify({
    version: pkg.version,
    deps: pkg.dependencies,
    devDeps: pkg.devDependencies,
  }),
  'utf8',
);
