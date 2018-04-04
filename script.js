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
               .then(() => bot.say(`Great! Thanks ${name} Are you a recruiter?`))
                .then(() => 'choose');
        }
    },

    choose: {
        receive: (bot) => {
        return bot.say(`Ok pick your subjects and ping me when your done %[SkillSet](https://timothyl3aker.github.io) %[WorkHistory](https://timothyl3aker.github.io/bio)`)
                .then(() => 'reachOut');
        }
    },
    
        reachOut: {
        receive: (bot) => {
        return bot.say('Would you like me to reach out to Tim? Click then leave me your contact info. Only Tim will use it %[Yes](postback:yes) %[No](postback:no)`)
                .then(() => bot.say(`Roger that ${name} Tim will contact you shortly.`)) 
                .then(() => 'finish');
        }
    },

    finish: {
        receive: (bot, message) => {
            return bot.getProp('name')
                .then((name) => bot.say(`Good talking to you ${name}, Msg sent but Tim didn\'t teach me` +
                         'to respond to that!'))
                 .then(() => 'finish');
      } 
    }
 });
