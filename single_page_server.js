var http = require('http');
var express = require('express');
var path = require('path');
var app = express();

var api = require('./routes/angular-api');


app.use(express.static(path.join(__dirname, 'public')));
app.set('views', __dirname + '/views');


app.get('/', function(req, res){
    res.render('index.html');
});

app.use('/api', api);

app.listen(8080);