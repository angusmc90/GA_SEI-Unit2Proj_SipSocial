const DrinkModel = require('../models/drinks');
const UserModel = require('../models/users')

module.exports = {
    new: newDrink, // take to the page to create an order
    create, // create a new drink doc
    index, // load all drinks at the-bar
    show, // show someone's post in the-hightop
    deleteDrink, // delete the user's post
}

// read someone's post in the-hightop
async function show (req, res) {
    console.log('ctrlDrnkShow');
    try {
        // create the drinksDocument based on the drink clicked in the-bar, pull in the related comments and cheer
        const drinkDocument = await DrinkModel.findById(req.params.id)
                                                .populate('comments')
                                                .populate('cheers')
                                                .exec();
        res.render(`bar-area/the-hightop/${drinkDoc._id}`, {drink: drinkDocument});
    } catch (err) {
        console.log(err)
        res.send(err)
    }
}

// load all drinks at the-bar
async function index (req, res) {
    console.log('index controler')
    try {
        const drinkDocuments = await DrinkModel.find([{}]);
        console.log('drink docs')
        res.render('drinks/the-bar', { drinkDocs: drinkDocuments});
    } catch (err) {
        console.log(err)
        res.send(err);
    }
}

// take to the page to create an order
function newDrink (req, res) {
    res.render('/the-bartender')
}

// create a new drink doc
async function create (req, res, next) {
    console.log(req.body, '| FORM CONTENTS');
    console.log(req.user, '| USER DETAILS');

    //need to change the value of the checkbox to a boolean
    req.body.orderAgainTF = !!req.body.orderAgainTF;
    console.log(req.body);

    try {
        const drinkDoc = await DrinkModel.create(req.body);
        console.log(drinkDoc, '| THE DOC JUST CREATED')
    } catch (er) {
        console.log(err)
        res.send(err);
    }
}

// delete the user's post
// NOTE TO SELF - this function will exist across three models, 
    // so there must be away to put this fucntion somewhere else?
    // or can we jsut require this controller on all pages?

async function deleteDrink(req, res) {
    try {
        await DrinkModel.deleteOne({_id:drinkDoc});
        res.redirect('/the-bar')
    } catch(err){
        console.log(err)
        res.send(err)
    }
}