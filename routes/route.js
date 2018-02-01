var express = require('express');
var router = express.Router();

//Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('The controller get request at time: ', Date.now());
    next();
});


// Define the home page route
router.get('/', function(req, res) {
    res.send('<b>Hello</b> welcome to my http server made with express');
});

// Define the about route
router.get('/about', function(req, res) {
    res.send('About Moi Moi');
});


module.exports = router;