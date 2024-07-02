module.exports = {
  onProcessExit: function (code, defaults) {
    // mommy needs some packages to help her out~
    const fs = require('fs')
    const path = require('path')
    const utils = require('./utils')

    // mommy needs to load her responses so she knows what to say~
    const responsesPath = path.join(__dirname, '/../', 'responses.json')
    let config = JSON.parse(fs.readFileSync(responsesPath, 'utf8'))

    // mommy comes with some defaults, but you can tell her to change them in your tsconfig.json file~
    config = utils.setDefaults(defaults, config)

    // mommy will talk to you~
    const responses = utils.getMoodResponses(code, config)
    const responseToUse = utils.getRandomValue(responses)

    console.log(
      `${utils.replaceVariables(responseToUse, config)} ${utils.getRandomValue(config.vars.emote.defaults)}`
    )
  },
}
