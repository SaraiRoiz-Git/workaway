const User = require('./model/User');

const checkIfMailExist =  async(req,res)=>{
    return await User.findOne({ email: req.body.email });
   
} 

module.exports ={
    checkIfMailExist
}