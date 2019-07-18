const functions = require('firebase-functions');
const express = require("express")
const app = express();
const cors = require("cors");
const router = require('./routes/router')
var admin = require('firebase-admin');

var serviceAccount = require('./serviceAccount');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://clanproject.firebaseio.com"
});
//admin.initializeApp(functions.config().firebase);


app.set('views', __dirname + '/views');
app.set('view engine','ejs');
 app.engine('html',require('ejs').renderFile);
//app.engine('html', require('ejs').renderFile())

app.use(express.static(__dirname + '/public'));
console.log('hihi')
app.use('/', router);

/*app.get('/test', (req, res) =>{
    res.render('test.html')
    console.log('fuckyou')
})*/


const api1 = functions.https.onRequest(app)
module.exports = {
    api1
}
console.log('hello');









/*

app.use(cors());

app.get('/products/:id', function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'})
});

app.listen(80, function () {
    console.log('CORS-enabled web server listening on port 80')
});

console.log('hihi')

exports.api = functions.https.onRequest(app);
*/

