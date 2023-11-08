const express = require('express');
const router = express.Router();
const bouncerCtrl = require('../controllers/bouncer');


router.get('/bouncer', bouncerCtrl.index);
router.post('/', bouncerCtrl.create);
// router.get('/bar-area/the-boucer', drinksCtrl.firstTime);


module.exports = router;