const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },
    // firstName: {
    //     type: String,
    //     required: true,
    // },
    // lastName: {
    //     type: String,
    //     required: true,
    // },
   
    // city: {
    //     type: String,
    //     required: true,
    // },

    // country: {
    //     type: String,
    //     required: true,
    // },

    // postalCode:{
    //     type: String,
    //     required: true,
    // },
    // token:{
    //     type: String
    // }  
});

module.exports = mongoose.model('User', userSchema)