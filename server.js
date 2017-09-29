
// Add Express to the project
var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var sqlite3 = require('sqlite3');

// Create an Express app object
var app = express(); 

var port = process.env.PORT || 1337;

var db = new sqlite3.Database('PortfolioDatabase.db');

// Instruct the express app to listen on port 3000,
// and print a message when the server start running


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', express.static( __dirname + '/public'));

app.get('/messages', function(request, response) {
	
	db.all("SELECT * FROM Messages", function(err, rows) {
		console.log('GET Messages: Database currently contains the following: ', rows);

		response.send(rows);
	});

});

app.post('/messages', function(request, response) {
	
	db.run("INSERT INTO Messages (Name, Email, Subject, Message) VALUES (?, ?, ?, ?) ", request.body.Name, request.body.Email, request.body.Subject, request.body.Message);
	response.redirect('index.html');
});

app.delete('/message', function(request, response) {
	db.run("DELET FROM Messages WHERE ID = (?)", request.body)
});

app.listen(port, function() {
	console.log("Listening on " + port);
})




