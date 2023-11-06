var express = require('express');
var router = express.Router();
const drinksCtrl = require('../controllers/drinks');
const isLoggedIn = require('../config/auth');


router.get('/', isLoggedIn, drinksCtrl.index);
router.get('/new', isLoggedIn, drinksCtrl.new);
router.post('/', isLoggedIn, drinksCtrl.create);

router.get('/:id/edit', isLoggedIn, drinksCtrl.edit);
router.put('/:id', isLoggedIn, drinksCtrl.update);

router.get('/:id', isLoggedIn, drinksCtrl.show);
router.delete('/:id', isLoggedIn, drinksCtrl.deleteDrink);

module.exports = router;