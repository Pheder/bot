var express = require('express');
var app = express();
var os = require('os');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/www'));
//app.set('views', __dirname + '/www');

app.get('/', function (req, res) {
 res.render('index');
});

app.listen(app.get('port'), function () {
  console.log('Example app listening on port '+ app.get('port')+'!');
});

/*var telegraf = require('telegraf');
var client = new telegraf(process.env.BOT_TOKEN);
client.telegram.setWebhook('https://debian/www');
client.startWebhook('/www', null, 8443)

client.command('start', (ctx) => ctx.reply('YO!'));
client.command('url', (ctx) => ctx.reply('http://www.'+os.hostname() + ':3000'));
client.startPolling();*/
