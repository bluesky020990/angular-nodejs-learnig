var fs = require('fs');
var http = require('http');
// var https = require('https');
// var privateKey  = fs.readFileSync('certificates/key.pem', 'utf8');
// var certificate = fs.readFileSync('certificates/cert.pem', 'utf8');
//
// var credentials = {key: privateKey, cert: certificate};
var express = require('express');
var app = express();

// your express configuration here

var httpServer = http.createServer(app);
// var httpsServer = https.createServer(credentials, app);

// For http
httpServer.listen(8080);

// For https
// httpsServer.listen(8443);



//include the routes file
var routes = require('./routes/route');
var users = require('./routes/users');



app.use('/', routes);
app.use('/users', users);
