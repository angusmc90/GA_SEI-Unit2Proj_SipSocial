const mongoose = require('mongoose');


const sipsUserSchema = new mongoose.Schema({
    // Creating googleID first
    // There won't be any log-ins without OAuth
    googleId: {
        type: String,
        required: true
    },
    firstName: String,
    lastName: String,
    profileName: String,
    profilePic: String,
    location: String,
    favDrink: String,
    hateDrink: String,
    DOB: Date,
    aboutMe: String,
    drinks: Array
}, {
    timstamps: true
});


module.exports = mongoose.model('SipsUser', sipsUserSchema)