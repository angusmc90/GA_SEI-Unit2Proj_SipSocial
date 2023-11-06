const DrinkModel = require('../models/drinks');
const UserModel = require('../models/users')

module.exports = {
    new: newDrink, // "post" a new drink order
    create, // "post" a new drink doc
    index, // "get" all of the drink reviews and redirect to the bar
    edit, // "put" changes to that post back to mongoDB
    show, // direct & "get" someone's post in the-hightop
    delete: deleteDrink, // "delete" the user's post
}

// direct & "get" someone's post in the-hightop
async function show (req, res) {
    console.log('show fn in drinks cntrlr');
    try {
        // create the drinksDocument based on the drink clicked in the-bar, pull in the related comments and cheer
        const drinkDocument = await DrinkModel.findById(req.params.id)
                                                .populate('comments')
                                                .populate('cheers')
                                                .exec();
        res.render('/bar-area/the-hightop', {drink: drinkDocument});
    } catch (err) {
        console.log(err)
        res.send(err)
    }
}

// "get" all of the drink reviews and redirect to the bar
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

// "post" a new drink order and "get" all fo teh drink orders, then redirected to the bar 
function newDrink (req, res) {
    res.render('/the-bar')
}

// "post" a new drink doc
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
async function deleteDrink(req, res) {
    try {
        await DrinkModel.findByIdAndDelete(req.params.id);
        res.redirect('/the-bar')
    } catch(err){
        console.log(err)
        res.send(err)
    }
}