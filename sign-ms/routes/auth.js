const router = require('express').Router();
const User = require('../model/User');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { regValidation, loginValidation } = require('../validation')
const verify = require('./verifyToken')

router.post('/signup', async (req, res) => {

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
        lastName: req.body.name,
        email: req.body.email,
        password: hashPassword
    });
    try {
        const saveUser = await user.save()
        //  res.send(saveUser);
        res.send({ user: user._id });
    } catch (error) {
        res.status(400).send(err)
    }
});

//login

const cors = require('cors')
var corsOptions = {
    origin: 'localhost:3000'
}
router.post('/login', cors(), async (req, res) => {
    // validate
    // const {error} = loginValidation(req.body)
    // if(error){
    //     return res.status(400).send(error.details[0].massage)
    // }


    const user = await User.findOne({ email: req.body.email })
    if (!user) {
        return res.status(400).send('1Email or password is worng')
    }

    console.log(req.body);
    console.log(user);
    //validate password
    const validPass = await bcrypt.compare(req.body.password, user.password)
    if (!validPass) {
        return res.status(400).send('2Email or password is worng')
    }

    //create and assign token
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET)
    res.header('auth-token', token).send(token)
})

router.post("/logout", verify, (req, res) => {
    res.sendStatus(200);
});

router.get("/data", verify, (req, res) => {
    return res.sendStatus(200).send("ok");
});

module.exports = router;