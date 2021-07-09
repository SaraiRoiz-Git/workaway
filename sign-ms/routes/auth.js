const router = require('express').Router();
const User = require('../model/User');
const bcrypt = require('bcryptjs')
const { regValidation, loginValidation } = require('../validation')

router.post('/register', async (req, res) => {
    // validate
    // const {error} = regValidation(req.body)
    // if(error){
    //     return res.status(400).send(error.details[0].massage)
    // }


    //checking if mail exist
    const emailExist = await User.findOne({ email: req.body.email })
    if (emailExist) {
        return res.status(400).send('Email is alredy exist')
    }

    //hash passwords
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword
    });
    try {
        const saveUser = await user.save()
      //  res.send(saveUser);
        res.send({user:user._id});
    } catch (error) {
        res.status(400).send(err)
    }
});

//login

router.post('/login',(req,res)=>{
    // validate
    // const {error} = loginValidation(req.body)
    // if(error){
    //     return res.status(400).send(error.details[0].massage)
    // }
    const user = await User.findOne({ email: req.body.email })
    if (!user) {
        return res.status(400).send('Email dosent exist')
    }
    //validate password
    const 


})
module.exports = router;