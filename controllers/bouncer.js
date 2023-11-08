const UserModel = require('../models/user')

module.exports = {
    index,
    new: newUser,
    create,
}

function index (req,res) {
console.log('BOUNCER INDEX')
    // try {
    //     const userDocs = await UserModel.findById(req.user.id);
    //     res.render('/bar-area/the-bouncer', {
    //     users : userDocs
    //     })
    // } catch (error) {
    //     console.log(error);
    //     res.send(error);
    // }
}

function newUser (req, res) {
    if (req.body.id) {
        res.redirect('/drinks')
    } else {
        res.render('/bar-area/bouncer')
    }
}


async function create(req,res){
    try {
        const userDoc = await UserModel.create(req.user);
        userDoc.userId = req.user._id;
        res.redirect('/bouncer')
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}