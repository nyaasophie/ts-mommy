module.exports = {

    onProcessExit: function(code) {
        const fs = require('fs');
        const utils = require('./utils')
        const path = require('path');
        const responsesPath = path.resolve(`${__dirname}/../`, 'responses.json');
        const config = JSON.parse(fs.readFileSync(responsesPath, 'utf8'));
        
        const responses = utils.getMoodResponses(code, config)
        const responseToUse = utils.getRandomValue(responses);
        console.log(utils.replaceVariables(responseToUse, config))

    }
  }