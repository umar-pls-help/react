var express = require('express');
var app=express()
var router = express.Router();
const port = 3000
// Home page route.
router.get('/', function (req, res) {
res.send('Wiki home page');
})
// About page route.
router.get('/about', function (req, res) {
res.send('About this wiki');
})

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)
})

app.use("/", router);

module.exports = router;