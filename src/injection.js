const fs = require('fs');
const JSON5 = require('json5');
const path = require('path');
const mommy = require('./mommy')

//based on tsc-hooks: https://github.com/swimauger/tsc-hooks
const tsconfigPath = path.resolve(process.cwd(), 'tsconfig.json');

if (fs.existsSync(tsconfigPath)) {
	const tsconfigStr = fs.readFileSync(tsconfigPath);
	const tsconfig = JSON5.parse(tsconfigStr);
	
    //only run if mommy is enabled in the tsconfig.json
    if(tsconfig?.mommy?.enabled === true) {
		process.on('exit', (code) => {
            mommy.onProcessExit(code, tsconfig.mommy)
        });
    }
}