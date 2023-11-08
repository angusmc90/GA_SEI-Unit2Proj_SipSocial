const mongoose = require('mongoose');


const sipsPostCommentsSchema = new mongoose.Schema({
    userPFName: String,
    userPFPic: String,
    userID: String,
    commentBody: String,
    postID: String,
}, {
    timstamps: true
});


module.exports = mongoose.model('SipsPostComment', sipsPostCommentsSchema)