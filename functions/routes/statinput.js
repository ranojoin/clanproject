const functions = require('firebase-functions');
var express = require("express");
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('statinput.html');
})

module.exports = router;