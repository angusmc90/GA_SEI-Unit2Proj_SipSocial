const DrinkModel = require('../models/drinks');
const UserModel = require('../models/users')

module.exports = {
    new: newReview, // take to the page to create an order
    create, // create the new 
    index, // load all drinks
    show, // read someone's post in the-hightop
    deleteDrink, // delete the user's post
}

async function show (req, res) {
    console.log('ctrlDrnkShow');
    try {
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