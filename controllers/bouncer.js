const UserModel = require('../models/users')

module.exports = {
    index,
    update: updateID,
}

// "get" the running bar tab
async function index (req, res) {
    res.render('/the-bar/index')
}

// "put" the user's added details
async function updateID(req, res) {
}