const UserModel = require('../models/user')

module.exports = {
    index,
    create,
}

async function index (req,res) {
    try {
        const userDocs = await UserModel.find({});
        res.render('/bar-area/the-bouncer', {
        users : userDocs
        })
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

async function create (req,res){
    try {
        const newUserDoc = await UserModel.create(req.body);
        newUserDoc.userId = req.user._id;
        res.redirect('/drinks')
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}