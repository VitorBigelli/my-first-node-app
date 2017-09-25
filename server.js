
// Add Express to the project
var express = require('express');

// Create an Express app object
var app = express(); 

var bodyParser = require('body-parser');


// Instruct the express app to listen on port 3000,
// and print a message when the server start running
app.listen(3000, function() {
	console.log("Server is listening on port 3000");
})

var sqlite3 = require('sqlite3');

var db = new sqlite3.Database('PortfolioDatabase.db');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use( express.static( __dirname + '/public'));

app.get('/messages', function(request, response) {
	
	db.all("SELECT * FROM Messages", function(err, rows) {
		console.log('GET Messages: Database currently contains the following: '  + rows);

		response.send(rows);
	});

});

app.post('/messages', function(request, response) {
	
});

app.delete('/message', function(request, response) {

	db.run("DELET FROM Messages WHERE ID = ?", request.body)

});

