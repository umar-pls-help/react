const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name:String ,
    email:String,
    password:String,
    cpassword:String 
});

const User1 =mongoose.model('User2', userSchema);

module.exports =User1