const UserModel = require('../models/user')

module.exports = {
    index,
    create,
    // firstTime,
    //update: updateID,
}

function index (req,res) {
    res.render('/bar-area/the-bouncer')
}

async function create(req, res) {
    try {
        const userDoc = await SipsUser.create(req.body);
        userDoc.userId = req.user._id;
        res.redriect('/drinks');
    } catch (err) {
        console.log(err)
        res.send(err) 
    }
}


// "get" the running bar tab
async function visitCheck (req, res, next) {
    // check if this is the user's first vist
    // will do this if they chose a profileName
    try {
        let user = await UserModel.findById(req.params.id);
        next(user)
    } catch (err) {
        console.log(err)
        res.send(err)
    }
}

// I commented this function from the exports 
// since we don't need to be exporting it at this time 
function firstTime (req, res){
    let user = req.body;
    let profileName = user.profileName;
    if (profileName) {
        res.redirect('/index')
    } else {
        res.render('/bar-area/the-bouncer')
    }
};

// "put" the user's added details
// async function updateID(req, res) {
// }