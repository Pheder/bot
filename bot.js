var telegraf = require('telegraf');
var client = new telegraf(process.env.BOT_TOKEN);
//client.telegram.setWebhook('https://debian/www');
//client.startWebhook('/www', null, 8443)

client.command('start', (ctx) => ctx.reply('YO!'));
client.command('url', (ctx) => ctx.reply('https://observe-bot.herokuapp.com/'));

const aboutMenu = telegraf.Extra
  .markdown()
  .markup((m) => m.inlineKeyboard([
    m.urlButton('test', 'https://172.17.100.51:5000')
  ]).resize())

client.command('onetime', (ctx) => {
  return ctx.reply('One time keyboard', aboutMenu )
})
client.startPolling();
