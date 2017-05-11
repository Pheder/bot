
var telegraf = require('telegraf');

var client = new telegraf(process.env.BOT_TOKEN);
client.command('start', (ctx) => ctx.reply('Hey'));
client.on('sticker', (ctx) => ctx.reply('👍'));
client.startPolling();
