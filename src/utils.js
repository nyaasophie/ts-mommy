module.exports = {
    getRandomValue: function (values) {
        if (values.length === 1) {
            return values[0];
        }
        const minCeiled = Math.ceil(0);
        const maxFloored = Math.floor(values.length);
        const toReturn = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
        return values[toReturn]
    },
    getMoodResponses: function(code,options) {
        if(code === 0) {
            return options.moods[options.vars.mood.defaults].positive
        }
        else {
            return options.moods[options.vars.mood.defaults].negative
        }
    },
    replaceVariables: function (output, options) {
        const format = require("string-template")
        return format(output, {
            role: this.getRandomValue(options.vars.role.defaults),
            pronoun: this.getRandomValue(options.vars.pronoun.defaults),
            affectionate_term: this.getRandomValue(options.vars.affectionate_term.defaults),
            denigrating_term: this.getRandomValue(options.vars.denigrating_term.defaults),
            emote: this.getRandomValue(options.vars.emote.defaults),
            part: this.getRandomValue(options.vars.part.defaults),
        })
    },
    setDefaults: function (responses) {

        const options = responses.vars

        //TODO: handle env vars for config
        const TS_MOMMYS_LITTLE = 'undefined' //girl/boy
        const TS_MOMMYS_PRONOUNS = undefined //her
        const TS_MOMMYS_ROLES = undefined //mommy
        const TS_MOMMYS_EMOTES = undefined //💜
        const TS_MOMMYS_MOODS = 'undefined' //chill


        TS_MOMMYS_LITTLE ? options.affectionate_term.defaults = [TS_MOMMYS_LITTLE] : options.affectionate_term.defaults;
        TS_MOMMYS_PRONOUNS ? options.pronoun.defaults = [TS_MOMMYS_PRONOUNS] : options.pronoun.defaults;
        TS_MOMMYS_ROLES ? options.role.defaults = [TS_MOMMYS_ROLES] : options.role.defaults;
        TS_MOMMYS_EMOTES ? options.emote.defaults = [TS_MOMMYS_EMOTES] : options.emote.defaults;
        TS_MOMMYS_MOODS ? options.mood.defaults = [TS_MOMMYS_MOODS] : options.mood.defaults;
        //TODO impl spicy


        responses.vars = options;
        return responses;

    }
}