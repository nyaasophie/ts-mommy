module.exports = {
  getRandomValue: function (values) {
    if (values.length === 1) {
      return values[0]
    }
    const minCeiled = Math.ceil(0)
    const maxFloored = Math.floor(values.length)
    const toReturn = Math.floor(
      Math.random() * (maxFloored - minCeiled) + minCeiled
    )
    return values[toReturn]
  },
  getMoodResponses: function (code, options) {
    if (code === 0) {
      return options.moods[options.vars.mood.defaults].positive
    } else {
      return options.moods[options.vars.mood.defaults].negative
    }
  },
  replaceVariables: function (output, options) {
    const format = require('string-template')
    return format(output, {
      role: this.getRandomValue(options.vars.role.defaults),
      pronoun: this.getRandomValue(options.vars.pronoun.defaults),
      affectionate_term: this.getRandomValue(
        options.vars.affectionate_term.defaults
      ),
      denigrating_term: this.getRandomValue(
        options.vars.denigrating_term.defaults
      ),
      emote: this.getRandomValue(options.vars.emote.defaults),
      part: this.getRandomValue(options.vars.part.defaults),
    })
  },
  setDefaults: function (defaults, responses) {
    if (defaults.affectionate_term) {
      responses.vars.affectionate_term.defaults = defaults.affectionate_term
    }
    if (defaults.pronouns) {
      responses.vars.pronoun.defaults = defaults.pronouns
    }
    if (defaults.role) {
      responses.vars.role.defaults = defaults.role
    }
    if (defaults.emotes) {
      responses.vars.emote.defaults = defaults.emotes
    }
    if (defaults.moods) {
      responses.vars.mood.defaults = defaults.moods
    }
    if (defaults.denigrating_term) {
      responses.vars.denigrating_term.defaults = defaults.denigrating_term
    }
    if (defaults.part) {
      responses.vars.part.defaults = defaults.part
    }

    return responses
  },
}
