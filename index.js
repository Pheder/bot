var express = require('express');
var app = express();
var os = require('os');
app.use(express.static('www'));

app.get('/', function (req, res) {
  res.send('');
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

var telegraf = require('telegraf');
var client = new telegraf(process.env.BOT_TOKEN);
client.command('start', (ctx) => ctx.reply('YO!'));
client.command('url', (ctx) => ctx.reply('http://www.'+os.hostname() + ':3000'));
client.startPolling();
