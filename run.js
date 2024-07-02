//based on tsc-hooks: https://github.com/swimauger/tsc-hooks

const path = require('path');
const script = require(path.resolve(__dirname, 'scripts', process.argv[2]));

if (script instanceof Function) {
  script(path.resolve(process.cwd(), '../typescript/bin/tsc'));
}