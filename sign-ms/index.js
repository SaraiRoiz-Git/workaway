const express = require('express');
const app = express();
const dotenv = require('dotenv')
const mongoose = require('mongoose');
// import Routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/post');

dotenv.config();

//db connect 
mongoose.connect(process.env.DB_CONNECT, { useUnifiedTopology: true },
    () => console.log('concted to db'));

//middelware
 app.use(express.json())

//Routh Midelware
app.use('/api/user', authRoute);
app.use('/api/post', postRoute);

app.listen(3000, () => {
    console.log("server is running")
})