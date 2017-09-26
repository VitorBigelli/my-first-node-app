
// Add Express to the project
var express = require('express');

// Create an Express app object
var app = express(); 

var bodyParser = require('body-parser');

var port = process.env.PORT || 1337;

// Instruct the express app to listen on port 3000,
// and print a message when the server start running
app.listen(port, function() {
	console.log("Server is listening on port 3000");
})

var sqlite3 = require('sqlite3');

var db = new sqlite3.Database('PortfolioDatabase.db');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use( express.static( __dirname + '/public'));

app.get('/', function(request, response) {
	response.sendFile('/public/index.html');
})

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

