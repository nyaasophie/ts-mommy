//based on tsc-hooks: https://github.com/swimauger/tsc-hooks
const path = require('path');
const fs = require('fs');

module.exports = (TSC_BIN_PATH) => {
  const INJECTION_PATH = path.resolve(__dirname, '../src/injection');

  const script = [
    '#!/usr/bin/env node',
    `require('${path.relative(path.dirname(TSC_BIN_PATH), INJECTION_PATH).replace(/\\/g, '/')}')`,
    "require('../lib/tsc.js')"
  ];

  fs.writeFileSync(TSC_BIN_PATH, script.join('\n'));
}