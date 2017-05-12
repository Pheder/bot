var express = require('express');
var app = express();
var https = require('https');
var fs = require('fs');
var options = {
   key  : fs.readFileSync('certs/server.key'),
   cert : fs.readFileSync('certs/server.crt')
};

//app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/www'));
//app.set('views', __dirname + '/www');

app.get('/', function (req, res) {
 res.render('index');
 //res.send('hey');
});

https.createServer(options, app).listen(5000, function () {
   console.log('Started!');
});

/*app.listen(app.get('port'), function () {
  console.log('Example app listening on port '+ app.get('port')+'!');
});*/
