const functions = require('firebase-functions');
var express = require("express");
var router = express.Router();

var memberlist = require('./memberlist');
var scorefind = require('./scorefind');
var statinput = require('./statinput');
var test = require('./test');

router.use('/memberlist', memberlist);
router.use('/scorefind', scorefind);
router.use('/statinput', statinput);
router.use('/test', test);



module.exports = router;