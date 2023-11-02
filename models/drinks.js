const mongoose = require('mongoose');


const sipsDrinkSchema = new mongoose.Schema({
    drinkName: String,
    postTitle: String,
    drinkPic: String,
    user: {
        type: mongoose.Schema.SipsUser.ObjectId,
        ref: 'User'
    },
    userPFName: String,
    userPFPic: String,
    userRating: {
        type: Number,
        min: 1,
        max: 5
    },
    alcoholType: {
        type: String,
        enum: ['Beer', 'Wine', 'Vodka', 'Gin', 'Whiskey', 'Tequila', 'Rum', 'Brandy', '0-Proof', 'Other', 'Cocktail']
    },
    alcoholDetails: String,
    orderedAt: String,
    madeBy: String,
    haveAnother: Boolean,
    tastingNotes: String,
    cheersIDs: Array,
    commentIDs: Array
}, {
    timstamps: true
});


module.exports = mongoose.model('SipsDrink', sipsDrinkSchema)