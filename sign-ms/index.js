const express = require('express');
const dotenv = require('dotenv')
const mongoose = require('mongoose');
// import Routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/post');

const app = express();
dotenv.config();

//db connect 
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true,useUnifiedTopology:true },function(err){
    if(err) console.log(err);
    console.log("database is connected");
});

//middelware
 app.use(express.json())

//Routh Midelware
app.use('/api/user', authRoute);
//app.use('/api/post', postRoute);

const port = process.env.PORT || 300
app.listen(port, () => {
    console.log(`port ${port}`)
})