console.debug("running server");
var telegraf = require('telegraf');
var client = new telegraf(process.env.BOT_TOKEN);
client.command('start', (ctx) => ctx.reply('YO!'));
client.command('url', (ctx) => ctx.reply('http://google.es'));
client.startPolling();
