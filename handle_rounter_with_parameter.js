// HANDLE ROUNTER_WITH PARAMETE https://ourcodeworld.com/articles/read/261/how-to-create-an-http-server-with-express-in-node-js
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('<b>My</b> first express http server');
});

// route with parameters
// matches to : /books/stephenking/category/horror
app.get('/books/:user/category/:categorySlug', function(req, res) {
    console.log(req.params);
    var username = req.params.user;
    var category = req.paramas.categorySlug;
    res.send(req.params);
});

app.use(function(req, res, next) {
    res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000.');
});