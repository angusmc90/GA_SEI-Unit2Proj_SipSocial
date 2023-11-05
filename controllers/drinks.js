const DrinkModel = require('../models/drinks');
const UserModel = require('../models/users')

module.exports = {
    new: newDrink, // take to the page to create an order
    create, // create the new 
    index, // load all drinks
    show, // read someone's post in the-hightop
    deleteDrink, // delete the user's post
}

async function show (req, res) {
    console.log('ctrlDrnkShow');
    try {
        // create the drinksDocument based on the drink clicked in the-bar, pull in the related comments and cheer
        const drinkDocument = await DrinkModel.findById(req.params.id)
                                                .populate('comments')
                                                .populate('cheers')
                                                .exec();
        res.render('bar-area/the-hightop', {drink: drinkDocument});
    } catch (err) {
        console.log(err)
        res.send(err)
    }
}

function newDrink (req, res) {
    res.render('/the-bartender')
}