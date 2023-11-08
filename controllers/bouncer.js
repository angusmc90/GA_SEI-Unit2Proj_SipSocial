const UserModel = require('../models/user')

module.exports = {
    index,
    // firstTime,
    update: updateID,
}

// "get" the running bar tab
async function index (req, res, next) {
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
        res.render('/the-bar/index')
    } else {
        res.render('/')
    }
};

// "put" the user's added details
async function updateID(req, res) {
}