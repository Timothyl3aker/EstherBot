'use strict';

const Script = require('smooch-bot').Script;

module.exports = new Script({
    processing: {
        prompt: (bot) => bot.say('Beep boop...'),
        receive: () => 'processing'
},
 
    start: {
        receive: (bot) => {
            return bot.say('Hi I\'m Timbot.')
                .then(() => 'askName');
        }
    },
 
   askName: {
       prompt: (bot) => bot.say('So you want to learn more about Tim.... What\'s your name?'),
         receive: (bot, message) => {
           const name = message.text;
          return bot.setProp('name', name)
               .then(() => bot.say(`Great! Thanks ${name}
 Are you a recruiter? %[Yes](postback:yes) %[No](postback:no)`))
                .then(() => 'choose');
        }
    },

    choose: {
        receive: (bot) => {
        return bot.say(`Ok pick a subject %[SkillSet](postback:https://timothyl3aker.github.io) %[WorkHistory](postback:https://timothyl3aker.github.io/bio)`)
                .then(() => 'reachOut');
        }
    },
    
        reachOut: {
        receive: (bot) => {
        return bot.say('Would you like me to reach out to Tim?')
                .then(() => 'finish');
        }
    },

    finish: {
        receive: (bot, message) => {
            return bot.getProp('name')
                .then((name) => bot.say(`Sorry ${name}, Tim didn\'t ` +
                         'how to respond that!'))
                 .then(() => 'finish');
      } 
    }
 });
