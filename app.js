var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var myMailer = require('./node_modules/microModuleSendTextMail/microModuleSendTextMail.js');

app.set('view engine', 'pug');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));



app.get('/', function(req, res){
  res.render('index', {
    title: 'Home page'
  });
});


app.get('/about', function(req,res){
	res.render('about', { title: 'About us'});
});

app.get('/contacts', function(req,res){
	res.render('contacts', { title: 'contacts'});
});


app.get('/sendmail', function(req,res){
	res.render('sendmail', { title: 'Send Mail'});
});

app.post('/sendmail', function(req,res){
	myMailer.sendMail( req.body.text, req.body.email );
	console.log("Email adress"+ req.body.email);
	console.log("Sending message - \n"+req.body.text+"\n");

	res.redirect("/sendmail");
});




app.listen(3000);
console.log('Express server listening on port 3000');