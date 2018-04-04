'use strict';

const Script = require('smooch-bot').Script;

module.exports = new Script({
    processing: {
        prompt: (bot) => bot.say('Beep boop...'),
        receive: () => 'processing'
},
 
    start: {
        receive: (bot) => {
            return bot.say('Hi I\'m Timbot.  So you want to learn more about Tim...')
                .then(() => 'askName');
        }
    },
 
   askName: {
       prompt: (bot) => bot.say('I can fill you in. What\'s your name?'),
         receive: (bot, message) => {
           const name = message.text;
          return bot.setProp('name', name)
               .then(() => bot.say(`Great! Thanks ${name}
 Are you a recruiter? %[Yes](postback:yes) %[No](postback:no)`))
                .then(() => 'giveExamples');
        }
    },

    giveExamples: {
        receive: (bot) => {
        return bot.say('What would you like to know?')
                .then(() => 'reachOut');
        }
    },

    reachOut: {
        receive: (bot, message) => {
        return bot.say('I vaca on most major messaging platforms, mail servers, sms and voice. Tell me which works for you.'),
            const name = message.text;
            return bot.setProp('name', name)
                .then(() => bot.say('Would you like to reach out to Tim'}
                .then(() => 'finish');
        }
    },
 
    finish: {
        receive: (bot, message) => {
            return bot.getProp('name')
                .then((name) => bot.say(`Sorry ${name}, Tim didn\'t ` +
                         'teach me how to do anything else!'))
                 .then(() => 'finish');
      } 
    }
 });
