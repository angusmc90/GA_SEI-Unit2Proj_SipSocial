const mongoose = require('mongoose');


const sipsUserSchema = new mongoose.Schema({
    // Creating googleID first
    // There won't be any log-ins without OAuth
    googleId: {
        type: String,
        required: true
    },
    name: String,
    email: String,
    profileName: {
        type: String,
        default: "newUser",
    },
    profilePic: String,
    location: String,
    favDrink: String,
    hateDrink: String,
    DOB: Number,
    aboutMe: String,
    drinks: Array
}, {
    timstamps: true
});


module.exports = mongoose.model('SipsUser', sipsUserSchema)