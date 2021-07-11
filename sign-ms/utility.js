const { validate } = require('./model/User');
const User = require('./model/User');
const bcrypt = require('bcryptjs')

const checkIfMailExist =  (req)=>{
    return  User.findOne({ email: req.body.email }); 
} 

const validatePassword =(req,user)=>{
    return bcrypt.compare(req.body.password, user.password)
}

module.exports ={
    checkIfMailExist,validatePassword
}