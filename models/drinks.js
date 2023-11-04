const mongoose = require('mongoose');


const sipsDrinkSchema = new mongoose.Schema({
    drinkName: String,
    postTitle: String,
    drinkPic: String,
    user: {
        type: mongoose.Schema.SipsUser.ObjectId,
        ref: 'SipsUser'
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
    // putting the cheers and comments not embededed because future versions
    // will have them listed outside of the context of 
    cheersIDs: [{type: mongoose.Schema.Types.ObjectId, ref: 'SipsCheersRxn'}],
    commentIDs: [{type: mongoose.Schema.Types.ObjectId, ref: 'SipsPostComments'}]
}, {
    timstamps: true
});


module.exports = mongoose.model('SipsDrink', sipsDrinkSchema)