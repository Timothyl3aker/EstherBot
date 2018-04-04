'use strict';

const Script = require('smooch-bot').Script;

module.exports = new Script({
    processing: {
        prompt: (bot) => bot.say('Beep boop...'),
        receive: () => 'processing'
    },

    start: {
        receive: (bot) => {
            return bot.say('So you want to learn more about Tim...')
                .then(() => 'askName');
        }
    },
    askName: {
        prompt: (bot) => bot.say('I can fill you in. What\'s your name?'),
        receive: (bot, message) => {
            const name = message.text;
            return bot.setProp('name', name)
                .then(() => bot.say(`Great! Thanks ${name}
                .then(() => 'giveExamples');
        }
    },
        giveExamples: {
        prompt: (bot) => bot.say('It would be sweet to be human but I am just a bot. These are the career specific keywords Tim has taught me to repoond to.'),
                .then(() => 'reachOut');
        }
    },
        reachOut: {
        prompt: (bot) => bot.say('I vaca on most major meesaging platforms, mail servers, sms and voice. Tell me which works for you.'),
        receive: (bot, message) => {
            const name = message.text;
            return bot.setProp('name', name)
                .then(() => bot.say('Would you like to reach out to Tim'}
%[Skill Sets](postback:Skill Sets) %[Work History](postback:work history)`))
                .then(() => 'finish');
        }
    },

    finish: {
        receive: (bot, message) => {
            return bot.getProp('name')
                .then((name) => bot.say(`Sorry ${name}, Tim didn't ` +
                        'teach me how to do anything else!'))
                .then(() => 'finish');
        }
    }
});
