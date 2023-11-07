const UserModel = require('../models/users')

module.exports = {
    index,
    update: updateID,
}

// "get" the running bar tab
function index (req, res) {
    res.render('/the-bar/index')
}

// // "your id was checked! Yay!"" 
// function firstTime (req, res) {
//     res.render('/the-bar/the-bouncer')
// }

// "put" the user's added details
async function updateID(req, res) {
}