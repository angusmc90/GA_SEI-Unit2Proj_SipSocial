const express = require('express');
const router = express.Router();
const passport = require('passport');



router.get('/bar-area/the-bar/index', isLoggedIn, drinksCtrl.index);
router.get('/bar-area/the-boucer', isLoggedIn, drinksCtrl.firstTime);

module.exports = router;