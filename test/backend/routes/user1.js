const router = require('express').Router();
let User1 = require('../models/users.model')
//const bodyParser = require("body-parser")



router.route('/').get((req,res) => {
    User1.find()
     .then(users1 => res.json(users1))
     .catch(err => res.status(400).json('Error:'+err))
})

router.route('/add').post((req,res) => {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    const cpassword = req.body.cpassword
    const newUser = new User1({
        name,
        email,
        password,
        cpassword
    })

    newUser.save()
     .then(() => res.json('User1 Added'))
     .catch(err => res.status(400).json('Error:'+err))

})

module.exports = router