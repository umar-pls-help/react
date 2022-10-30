var express = require('express');

//require('express-router')(app);
var router = express.Router();

// Home page route.
router.get('/', function (req, res) {
res.send('Wiki home page');
})
// About page route.
router.get('/about', function (req, res) {
res.send('About this wiki');
})

module.exports = router;