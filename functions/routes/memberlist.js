const functions = require('firebase-functions');
var express = require("express");
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('memberlist.html', {name:"member"});

    // res.send("씨발");
})
console.log('fuckyoumember')
module.exports = router;