const DrinkModel = require('../models/drinks');
const UserModel = require('../models/user')

module.exports = {
    index, // "get" all of the drink reviews and redirect to the bar
    new: newDrink, // "post" a new drink order TO THE VIEW
    createDoc, // "post" a new drink doc to DB
    edit, // "put" changes to that post back to mongoDB
    update,
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
async function index (req, res, next) {
    const user = await UserModel.findById(req.params.id);
    const profileName = user.profileName;
    if (!profileName) {
        res.redirect('/bouncer', user)
    } else {
        next()
    }
};

async function countTill (req,res) {
    console.log('index controler')
    try {
        const drinkDocuments = await DrinkModel.find([{}]);
        console.log('drink docs')
        res.render('/', { drinkDocs: drinkDocuments});
    } catch (err) {
        console.log(err)
        res.send(err);
    }
}

// "post" a new drink order and "get" all fo teh drink orders, then redirected to the bar 
function newDrink (req, res) {
res.render('bar-area/the-bar/index')
}

// "post" a new drink doc
async function createDoc (req, res, next) {
    console.log(req.user, '| USER DETAILS');
    //using req.body event tho not the best code-wise

    console.log(req.body, '| FORM CONTENTS');
    //need to change the value of the checkbox to a boolean
    req.body.orderAgainTF = !!req.body.orderAgainTF;
    console.log(req.body);

    try {
        const drinkDoc = await DrinkModel.create({
            drinkName: req.body.drinkName,
            postTitle: req.body.postTitle,
            // drinkPic: req.body.drinkPic,
            userID: req.body.userID,
            userPFName: req.user.userPFName,
            userPFPic: req.user.userPFPic,
            userRating:  req.body.userRating,
            alcoholType:  req.body.alcoholType,
            alcoholDetails: req.body.alcoholDetails,
            orderedAt: req.body.orderedAt,
            madeBy: req.body.madeBy,
            haveAnother:  req.body.haveAnother,
            tastingNotes: req.body.tastingNotes,
        });
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
        res.redirect('/')
    } catch(err){
        console.log(err)
        res.send(err)
    }
}

//redirects to the update reciept page
async function edit(req, res){
    try{
        const drinkDoc = await DrinkkModel.findById(req.params.id)
        console.log(drinkDoc)
        res.render('../order-with/an-attitude', {
            orderNum: drinkDoc.req.params.id,
            badDrink: drinkDoc
        })
    } catch (err){
        res.send(err);
    }
}

async function update(req, res){
    try{
        const correctedOrder = await DrinkModel.findById(req.params.id);
        correctedOrder.drinkName = req.body.drinkName
        correctedOrder.postTitle = req.body.postTitle
        // correctedOrder.drinkPic = req.body.drinkPic
        correctedOrder.userRating = req.body.userRating
        correctedOrder.alcoholType = req.body.alcoholType
        correctedOrder.alcoholDetails = req.body.alcoholDetails
        correctedOrder.orderedAt = req.body.orderedAt
        correctedOrder.madeBy = req.body.madeBy
        correctedOrder.haveAnother = req.body.haveAnother
        correctedOrder.tastingNotes = req.body.tastingNotes
        res.redirect(`/recipes`);
    } catch (err){
        res.send(err);
    }

}