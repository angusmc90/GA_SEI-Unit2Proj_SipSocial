const CommentModel = require('../models/comments');

module.exports = {
    create, // "post" a new comment
    delete: deleteComment, // "delete" a comment
}

// "post" a new comment
async function create (req, res, next) {
    console.log(req.body, ' | comments body');

    try {
        const commentDoc = await CommentModel.create(req.body);
        console.log(commentDoc, '| THE DOC JUST CREATED')
        location.reload()
    } catch (er) {
        console.log(err)
        res.send(err);
    }
}

// delete the user's comment
async function deleteComment(req, res) {
    try {
        await CommentModel.findByIdAndDelete(req.params.id);
        location.reload()
    } catch(err){
        console.log(err)
        res.send(err)
    }
}