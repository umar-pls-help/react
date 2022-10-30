const router = require('express').Router();
let Demo = require('../models/demo_model')


router.route('/').get( async(req, res) =>{
    const demos = await Demo.find()
    res.json(demos)
})

router.route('/add').post( async(req, res) =>{
    const demo = new Demo({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone
    })
    demo.save()
    res.json(demo)
})






module.exports = router





// Default router route

/* router.route('/').get((req,res) => {
    Demo.find()
     .then(demo => res.json(demo))
     .catch(err => res.status(400).json('Error:'+err))
})

router.route('/add').post((req,res) => {
    const name = req.body.name
    const email = req.body.email
    const phone = Number(req.body.phone)
    const newDemo = new Demo({
        name,
        email,
        phone 
    })

    newDemo.save()
     .then(() => res.json('Demo Added'))
     .catch(err => res.status(400).json('Error:'+err))

}) */