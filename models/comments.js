const mongoose = require('mongoose');


const sipsPostCommentsSchema = new mongoose.Schema({
    userPFName: String,
    userPFPic: String,
    commentBody: String,
    userID: {
        type: mongoose.Schema.SipsUser.ObjectId,
        ref: 'SipsUser'
    },
    postID: {
        type: mongoose.Schema.SipsDrink.ObjectId,
        ref: 'SipsDrink'
    }
}, {
    timstamps: true
});


module.exports = mongoose.model('SipsCheersRxn', sipsCheersRxnSchema)