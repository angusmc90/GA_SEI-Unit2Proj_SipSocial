const express = require('express');
const router = express.Router();
const bouncerCtrl = require('../controllers/bouncer');


router.get('/bouncer/checkID', bouncerCtrl.index);
router.post('/bouncer', bouncerCtrl.create);
// router.get('/bar-area/the-boucer', drinksCtrl.firstTime);


module.exports = router;