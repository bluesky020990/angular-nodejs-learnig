var express = require('express');
var user = express.Router();

// prefix is /users (See html server for more detail)
user.get('/about', function(req, res) {
    res.send('This is website of B');
});

// Define the about route
user.get('/moi-moi', function(req, res) {
    res.send('Moi Moi la 1 dua do hoi chu la gi nua');
});


module.exports = user;