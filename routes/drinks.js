var express = require('express');
var router = express.Router();
const drinksCtrl = require('../controllers/drinks');
const isLoggedIn = require('../config/auth');


router.get('/drinks', drinksCtrl.index);
router.get('/new', drinksCtrl.new);
router.post('/', isLoggedIn, drinksCtrl.createDoc);

router.get('/:id/edit', isLoggedIn, drinksCtrl.edit);
router.put('/:id', isLoggedIn, drinksCtrl.update);

router.get('/:id', isLoggedIn, drinksCtrl.show);
router.delete('/:id', isLoggedIn, drinksCtrl.delete);

module.exports = router;