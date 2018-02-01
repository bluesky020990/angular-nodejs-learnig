var express = require('express');
var angularAPI = express.Router();

// prefix is /api (See html server for more detail)
angularAPI.get('/home', function(req, res) {
    res.json({
        title: "This is website of B",
        content : "Welcome to my website. Have fun!!!"
    });
});

angularAPI.route('/api/cats').get((req, res) => {
    res.send({
        cats: [{ name: 'lilly' }, { name: 'lucy' }, {name : 'moi moi'}]
    });
});

module.exports = angularAPI;