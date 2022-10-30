const mongoose = require('mongoose')
const Schema = mongoose.Schema

const demoSchema = new Schema({
    name:String ,
    email:String,
    phone:Number 
}, 
);

const Demo =mongoose.model('Demo', demoSchema);

module.exports = Demo