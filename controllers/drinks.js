const DrinkModel = require('../models/drinks');
const UserModel = require('../models/users')

module.exports = {
    new: newReview, // take to the page to create an order
    create, // create the new 
    index, // load all drinks
    show, // read someone's post in the-hightop
    delee // delete the user's post
}

async function show (req, res) {
    console.log('ctrlDrnkShow');
    try {
        const drinkDocument = await DrinkModel.findById(reg.params.id)
    }
}